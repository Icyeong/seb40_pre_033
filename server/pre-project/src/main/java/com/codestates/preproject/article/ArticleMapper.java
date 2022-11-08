package com.codestates.preproject.article;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel="spring")
public interface ArticleMapper {
    @Mapping(target="articleId", ignore = true)
    Article articlePostToArticle(ArticlePost articlePost);

    Article articlePatchToArticle(ArticlePatch articlePatch);

}
