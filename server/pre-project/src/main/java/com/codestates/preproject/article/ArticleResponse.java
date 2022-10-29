package com.codestates.preproject.article;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ArticleResponse {
    private long articleId;
    private String title;
    private String contents;
}