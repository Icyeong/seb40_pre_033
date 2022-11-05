package com.codestates.preproject.reply.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReplyResponseDto {

    private long replyId;
    private String replyContent;
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    private long commentId;

}
