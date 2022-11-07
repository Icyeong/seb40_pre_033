package com.codestates.preproject.article;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class ArticleDeleteResponse {
    @JsonProperty("articleId")
    private long articleId;

    public ArticleDeleteResponse(long articleId) {
        this.articleId = articleId;
    }
}



