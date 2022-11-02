package com.codestates.preproject.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class CommentPatchDto {

    private long commentId;

    @NotBlank(message="내용을 입력해주세요.")
    private String content;

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }

}
