package com.codestates.preproject.comment.dto;

import lombok.Getter;

@Getter
public class CommentDeleteDto {

    private long commentId;

    public CommentDeleteDto(long commentId) {
        this.commentId = commentId;
    }

}
