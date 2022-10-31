package com.codestates.preproject.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CommentPostDto {

    @NotBlank
    private long commentId;

    @NotBlank
    private String username;

    @NotBlank
    private String content;

}
