package com.codestates.preproject.article;

import com.codestates.preproject.articleTag.ArticleTag;
import com.codestates.preproject.articleTag.ArticleTagRepository;
import com.codestates.preproject.comment.dto.CommentResponseDto;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.service.CommentService;
import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.response.MultiResponseDto;
import com.codestates.preproject.tag.dto.TagPostDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.repository.TagRepository;
import com.codestates.preproject.tag.service.TagService;
import com.codestates.preproject.user.dto.UserResponseDto;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final TagService tagService;
    private final TagRepository tagRepository;
    private final ArticleTagRepository articleTagRepository;
    private final CommentService commentService;
    private final UserRepository userRepository;

    @Transactional
    public ArticleResponse makeArticle(Article article, String email, List<Tag> tags) {
        //email 받아오기
        //email로 user 조회해서 article에 저장
        Optional<User> optionalUser = userRepository.findByEmail(email);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        article.setUser(findUser);

        Article saveArticle = articleRepository.save(article);
        tags.stream().forEach(tag -> tagRepository.save(tag));

        if (tags.size() > 0) {
            tags.stream().forEach(tag -> {
                ArticleTag articleTag = ArticleTag.builder().article(saveArticle).tag(tag).build();
                articleTagRepository.save(articleTag);
            });
        } else {
            articleTagRepository.save(ArticleTag.builder().article(saveArticle).build());
        }

        Page<Comment> commentPage = commentService.findComments(saveArticle.getArticleId(), 0, 10);

        return ArticleResponse.builder()
                .articleId(saveArticle.getArticleId())
                .title(saveArticle.getTitle())
                .createdAt(saveArticle.getCreatedAt())
                .content(saveArticle.getContent())
                .email(UserResponseDto.of(saveArticle.getUser()).getEmail())
                .comments(commentPage.stream()
                        .map(comment -> CommentResponseDto.of(comment))
                        .collect(Collectors.toList()))
                .tags(articleTagRepository.findAllByArticle_articleId(saveArticle.getArticleId()).stream().map(tag -> tag.getTag().getName()).collect(Collectors.toList()))
                .build();

    }

    //
    @Transactional(readOnly = true)
    public ArticleResponse findArticleResponse(long articleId) {
        return findVerifiedArticle(articleId);
    }

    @Transactional(readOnly = true)
    public Article findArticle(long articleId) {
        Optional<Article> optionalArticle = articleRepository.findById(articleId);

        Article foundArticle =
                optionalArticle.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));

        return foundArticle;
    }


    @Transactional
    public Article updateArticle(Article article, String email) {

        Optional<Article> optionalArticle = articleRepository.findById(article.getArticleId());

        Article foundArticle =
                optionalArticle.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));

        Optional.ofNullable(article.getTitle())
                .ifPresent(title -> foundArticle.setTitle(title));

        Optional.ofNullable(article.getContent())
                .ifPresent(content -> foundArticle.setContent(content));

        return articleRepository.save(foundArticle);

    }

    @Transactional(readOnly = true)
    public ArticleResponse findVerifiedArticle(long articleId) {
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        Article saveArticle =
                optionalArticle.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));

        Page<Comment> commentPage = commentService.findComments(saveArticle.getArticleId(), 0, 10);

        return ArticleResponse.builder()
                .articleId(saveArticle.getArticleId())
                .title(saveArticle.getTitle())
                .createdAt(saveArticle.getCreatedAt())
                .content(saveArticle.getContent())
                .email(UserResponseDto.of(saveArticle.getUser()).getEmail())
                .comments(commentPage.stream()
                        .map(comment -> CommentResponseDto.of(comment))
                        .collect(Collectors.toList()))
                .tags(articleTagRepository.findAllByArticle_articleId(saveArticle.getArticleId()).stream().map(tag -> tag.getTag().getName()).collect(Collectors.toList()))
                .build();
    }

    @Transactional
    public void deleteArticle(long articleId) {

        Optional<Article> optionalArticle = articleRepository.findById(articleId);

        Article saveArticle =
                optionalArticle.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));

        articleRepository.delete(saveArticle);
    }

    // 아티클 전체 조회
    @Transactional(readOnly = true)
    public MultiResponseDto<ArticleResponse> findArticles(int page, int size) {

        Page<Article> articlesInPage = articleRepository.findAll(PageRequest.of(page, size, Sort.by("articleId").descending()));
        List<Article> articles = articlesInPage.getContent();

        return new MultiResponseDto<>(articles.stream().map(saveArticle ->

            ArticleResponse.builder()
                    .articleId(saveArticle.getArticleId())
                    .title(saveArticle.getTitle())
                    .createdAt(saveArticle.getCreatedAt())
                    .content(saveArticle.getContent())
                    .email(UserResponseDto.of(saveArticle.getUser()).getEmail())
                    .comments(commentService.findComments(saveArticle.getArticleId(), 0, 10).stream()
                            .map(comment -> CommentResponseDto.of(comment))
                            .collect(Collectors.toList()))
                    .tags(articleTagRepository.findAllByArticle_articleId(saveArticle.getArticleId()).stream().map(tag -> tag.getTag().getName()).collect(Collectors.toList()))
                    .build()

        ).collect(Collectors.toList()), articlesInPage);

    }

}
/*
    //들어온 이메일과 게시글의 이메일을 비교해 다르다면 예외처리
    public User checkUserEmail(Article article, String email) throws Exception{
        Optional<User> optionalUser = userRepository.findByEmail(email);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        String savedEmail= article.getEmail();
        //현재 포스트의 email과 인입된 email 대조
        return findUser = findUser.stream().filter(u -> u.getEmail().equals(savedEmail))
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PERMISSION_DENIED));
    }*/
