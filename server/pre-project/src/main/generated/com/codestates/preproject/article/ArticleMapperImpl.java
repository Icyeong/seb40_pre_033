package com.codestates.preproject.article;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-10-31T15:01:43+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class ArticleMapperImpl implements ArticleMapper {

    @Override
    public Article articlePostToArticle(ArticlePost articlePost) {
        if ( articlePost == null ) {
            return null;
        }

        Article.ArticleBuilder article = Article.builder();

        article.title( articlePost.getTitle() );
        article.contents( articlePost.getContents() );

        return article.build();
    }

    @Override
    public ArticleResponse articleToArticleResponse(Article article) {
        if ( article == null ) {
            return null;
        }

        ArticleResponse.ArticleResponseBuilder articleResponse = ArticleResponse.builder();

        if ( article.getArticleId() != null ) {
            articleResponse.articleId( article.getArticleId() );
        }
        articleResponse.title( article.getTitle() );
        articleResponse.contents( article.getContents() );

        return articleResponse.build();
    }
}
