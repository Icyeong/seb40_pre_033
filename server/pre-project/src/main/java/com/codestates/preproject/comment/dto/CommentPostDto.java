package com.codestates.preproject.comment.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommentPostDto {

    private long commentId;
    private String username;
    private String content;

}
