package com.codestates.preproject.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentPostDto {

    // TODO @NotBlank
    private long commentId;

    private String username;

    private String content;

}
