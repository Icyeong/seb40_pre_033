package com.codestates.preproject.article;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel="spring")
public interface ArticleMapper {
    @Mapping(target="articleId", ignore = true)
    Article articlePostToArticle(ArticlePost articlePost);
    //Article articlePatchToArticle(ArticlePatch articlePatch);

    ArticleResponse articleToArticleResponse(Article article);


}
