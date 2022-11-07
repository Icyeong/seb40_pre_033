package com.codestates.preproject.article;

import com.codestates.preproject.comment.dto.CommentResponseDto;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.tag.dto.TagResponseDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.user.dto.UserResponseDto;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
@Builder
public class ArticleResponse {
    @JsonProperty("articleId")
    private long articleId;
    private String title;
    private String content;
    private String email;
    private int vote;
    @JsonProperty("createAt")
    private LocalDateTime createdAt;

    @Builder.Default
    private List<CommentResponseDto> comments;

    @Builder.Default
    private List<TagResponseDto> tags;

    public static ArticleResponse of(Article article, Page<Comment> commentPage, Page<Tag> tagPage){
        return ArticleResponse.builder()
                .articleId(article.getArticleId())
                .title(article.getTitle())
                .createdAt(article.getCreatedAt())
                .content(article.getContent())
                .email(UserResponseDto.of(article.getUser()).getEmail())
                .comments(commentPage.stream()
                        .map(comment -> CommentResponseDto.of(comment))
                        .collect(Collectors.toList()))
                .tags(tagPage.stream()
                        .map(tag -> TagResponseDto.of(tag))
                        .collect(Collectors.toList()))
                .build();
    }
    
}