package com.codestates.preproject.article;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticleService {
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    @Transactional
    public Article createArticle(Article article, String email)    {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        /*에러가 뜨면 에러 던지고 아닌 경우 받아옴*/

        article.setUser(findUser);
        article.setEmail(email);

        return articleRepository.save(article);
    }

    @Transactional(readOnly = true)
    public Article findArticle(long articleId) {
        return findVerifiedArticle(articleId);
    }


    @Transactional
    public Article updateArticle(Article article,String email) {
        Article foundArticle = findVerifiedArticle(article.getArticleId());
        //user 찾아오고 없으면 에러
        //checkUserEmail(article, email);
        Optional.ofNullable(article.getTitle())
                .ifPresent(title -> foundArticle.setTitle(title)); //To Do: setter패턴 builder로 변경

        Optional.ofNullable(article.getContent())
                .ifPresent(content -> foundArticle.setContent(content));//To Do: setter패턴 builder로 변경

        return articleRepository.save(foundArticle);

    }
    @Transactional(readOnly = true)
    public Article findVerifiedArticle(long articleId) {
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        Article foundArticle =
                optionalArticle.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));

        return foundArticle;
    }
    @Transactional
    public void deleteArticle(long articleId,String email) {

        Article foundArticle = findVerifiedArticle(articleId);
        articleRepository.delete(foundArticle);
    }
    @Transactional(readOnly = true)
    public Page<Article> findArticles(int page, int size) {
        return articleRepository.findAll(PageRequest.of(page, size, Sort.by("articleId").descending()));
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

    // 더미 데이터 사용 용도
    public Article createArticle(Article article)    {

        return articleRepository.save(article);
    }

}
