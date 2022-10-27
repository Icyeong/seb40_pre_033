package com.codestates.preproject.article;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ArticlePost {
    @NotNull
    @NotBlank(message="내용을 입력해주세요.")
    private String contents;
    @NotNull
    @NotBlank(message="제목을 입력해주세요.")
    private String title;
    //private int vote; ERD 수정 후 반영 예정
}