package com.codestates.preproject.article;

import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ArticleResponse {
    private long articleId;
    private String title;
    private String contents;
}