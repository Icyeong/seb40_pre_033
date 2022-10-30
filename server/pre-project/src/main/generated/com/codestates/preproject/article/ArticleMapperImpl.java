package com.codestates.preproject.article;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-31T02:02:10+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class ArticleMapperImpl implements ArticleMapper {

    @Override
    public Article articlePostToArticle(ArticlePost articlePost) {
        if ( articlePost == null ) {
            return null;
        }

        Long articleId = null;
        String title = null;
        String contents = null;

        Article article = new Article( articleId, title, contents );

        return article;
    }

    @Override
    public ArticleResponse articleToArticleResponse(Article article) {
        if ( article == null ) {
            return null;
        }

        ArticleResponse articleResponse = new ArticleResponse();

        return articleResponse;
    }
}
