package com.codestates.preproject.comment.dto;

import com.codestates.preproject.comment.entity.Comment;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponseDto {

    private long commentId;
    private String username;
    private String content;


    public static CommentResponseDto of(Comment comment) {
        return new CommentResponseDto(comment.getCommentId(), comment.getUsername(), comment.getContent());
    }

}
