package com.codestates.preproject.article;

import com.codestates.preproject.exception.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticleService {
    private final ArticleRepository articleRepository;



    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }

    public Article findArticle(long articleId) {
        return findVerifiedArticle(articleId);
    }



    public Article updateArticle(Article article) {
        Article foundArticle = findVerifiedArticle(article.getArticleId());

        Optional.ofNullable(article.getTitle())
                .ifPresent(title -> foundArticle.setTitle(title)); //To Do: setter패턴 builder로 변경

        Optional.ofNullable(article.getContents())
                .ifPresent(contents -> foundArticle.setContents(contents));//To Do: setter패턴 builder로 변경

        return articleRepository.save(foundArticle);

    }

    private Article findVerifiedArticle(long coffeeId) {
        Optional<Article> optionalArticle = articleRepository.findById(coffeeId);
        Article foundArticle =
                optionalArticle.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));

        return foundArticle;
    }

    /*public void deleteArticle(long memberId) {
        Article foundArticle = findVerifiedArticle(memberId);

        articleRepository.delete(foundArticle);
    }*/

    public Page<Article> findArticles(int page, int size) {
        return articleRepository.findAll(PageRequest.of(page, size, Sort.by("articleId").descending()));
    }



}
