package com.codestates.preproject.article;


import lombok.Getter;

import java.util.Optional;

@Getter
public class ArticlePatch {
    private Long articleId;

    private Optional<String> title = Optional.empty();

    private Optional<String> contents = Optional.empty();

    /*DTO의 경우 원래 setter가 필요없지만, patch 시 path variable 설정이 필요*/

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }
}
