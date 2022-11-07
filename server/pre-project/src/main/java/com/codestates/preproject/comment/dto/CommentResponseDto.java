package com.codestates.preproject.comment.dto;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.reply.entity.Reply;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponseDto {

    private long commentId;
    private String content;
    private String email;
    private int vote;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    private Long articleId;

    private List<Reply> replies;


    public CommentResponseDto(Long commentId,String content, String email,LocalDateTime createdAt, LocalDateTime modifiedAt,Long articleId){
        this.commentId=commentId;
        this.content = content;
        this.email =email;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.articleId = articleId;
    }

    public static CommentResponseDto of(Comment comment) {
        return new CommentResponseDto(comment.getCommentId(), comment.getContent(), comment.getEmail(), comment.getCreatedAt(), comment.getModifiedAt(), comment.getArticleId());
    }

}
