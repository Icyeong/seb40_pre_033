package com.codestates.preproject.reply.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReplyPostDto {

    private String email;

    @NotBlank(message="내용을 입력해주세요.")
    private String replyContent;

    private long commentId;

    public ReplyPostDto(String replyContent) {
        this.replyContent = replyContent;
    }

    public void setUserEmail(String email) {
        this.email = email;
    }

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }

}
