package com.codestates.preproject.article;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Getter
public class ArticlePost implements Serializable {
    @NotEmpty(message="제목을 입력해주세요.")
    private String title;
    @NotEmpty(message="내용을 입력해주세요.")
    private String content;
}