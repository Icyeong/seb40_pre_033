package com.codestates.preproject.article;

import lombok.*;

@Getter
@AllArgsConstructor
public class ArticleResponse {
    private long articleId;
    private String title;
    private String contents;
}