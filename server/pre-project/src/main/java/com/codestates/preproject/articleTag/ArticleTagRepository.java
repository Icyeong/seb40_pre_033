package com.codestates.preproject.articleTag;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArticleTagRepository extends JpaRepository<ArticleTag, Long> {

    List<ArticleTag> findAllByTag_tagId(@Param(value = "tagId") Long tagId);
    List<ArticleTag> findAllByArticle_articleId(@Param(value = "articleId") Long articleId);

}
