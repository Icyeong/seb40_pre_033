package com.codestates.preproject.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentPatchDto {

    private long commentId;
    private String content;

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }

}
