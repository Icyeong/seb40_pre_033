package com.codestates.preproject.article;

import org.mapstruct.Mapper;

@Mapper(componentModel="spring")
public interface ArticleMapper {
    Article articlePostToArticle(ArticlePost articlePost);

    ArticleResponse articleToArticleResponse(Article article);
}
