package com.codestates.preproject.comment.dto;

import com.codestates.preproject.article.Article;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentPostDto {

    private String email;

    @NotBlank(message="내용을 입력해주세요.")
    private String content;

    private long articleId;

    public CommentPostDto(String content) {
        this.content = content;
    }

    public void setUserEmail(String email) {
        this.email = email;
    }

    public void setArticle() {
        this.articleId = articleId;
    }

}
