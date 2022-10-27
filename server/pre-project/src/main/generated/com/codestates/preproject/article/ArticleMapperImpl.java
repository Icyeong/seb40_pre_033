package com.codestates.preproject.article;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-27T00:23:29+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class ArticleMapperImpl implements ArticleMapper {

    @Override
    public Article articlePostToArticle(ArticlePost articlePost) {
        if ( articlePost == null ) {
            return null;
        }

        Article article = new Article();

        return article;
    }
}
