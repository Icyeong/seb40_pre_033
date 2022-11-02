package com.codestates.preproject.article;

import com.codestates.preproject.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ArticleResponse {
    private long articleId;
    private String title;
    private String content;
    private String email;
    private int vote;
    private LocalDateTime createdAt;
    private List<Comment> comments;
}