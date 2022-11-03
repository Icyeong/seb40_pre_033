package com.codestates.preproject.comment.dto;

import lombok.*;

import java.time.LocalDateTime;

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

}
