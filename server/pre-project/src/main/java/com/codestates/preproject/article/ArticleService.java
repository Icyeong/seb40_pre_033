package com.codestates.preproject.article;


import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ArticleService {
    private final ArticleRepository articleRepository;
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }


    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }

    public Article findArticle(long articleId) {
        return findVerifiedArticle(articleId);
    }

    private Article findVerifiedArticle(long articleId){
        Optional<Article> optionalArticle =
                articleRepository.findById(articleId);
        Article foundArticle =
                optionalArticle.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));
        return foundArticle;
    }


}
