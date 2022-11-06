package com.codestates.preproject.reply.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class ReplyPatchDto {

    private long replyId;

    private String email;

    @NotBlank(message = "내용을 입력해주세요.")
    private String replyContent;

    public ReplyPatchDto(String replyContent) {
        this.replyContent = replyContent;
    }

    public void setReplyId(long replyId) {
        this.replyId = replyId;
    }

    public void setEmail(String email)  {
        this.email = email;
    }

}
