package com.codestates.preproject.comment.dto;

import com.codestates.preproject.audit.BaseTime;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponseDto {

    private long commentId;
    private String content;
    private User email;
    private int vote;
    private LocalDateTime createdAt;

}
