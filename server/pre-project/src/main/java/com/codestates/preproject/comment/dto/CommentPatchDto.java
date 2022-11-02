package com.codestates.preproject.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class CommentPatchDto {

    private long commentId;
    private String email;
    @NotBlank(message="내용을 입력해주세요.")
    private String content;

    public CommentPatchDto(String content) {
        this.content = content;
    }

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }

    public void setUserEmail(String email) {
        this.email = email;
    }

}
