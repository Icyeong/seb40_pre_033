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

    private String email;

    @NotBlank(message="내용을 입력해주세요.")
    private String content;

    public CommentPostDto(String content) {
        this.content = content;
    }

    public void setUserEmail(String email) {
        this.email = email;
    }

}
