package com.codestates.preproject.article;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ArticleResponse {
    private long articleId;
    private String title;
    private String content;
    private int vote;
    private LocalDateTime createdAt;
}