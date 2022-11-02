package com.codestates.preproject.article;


import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ArticlePatch {
    private Long articleId;
    private String title;
    private String content;
    private String email;

    public ArticlePatch(String title, String contents) {
        this.title = title;
        this.content = contents;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }
    public void setUserEmail(String email) {
        this.email = this.email;
    }

    /*DTO의 경우 원래 setter가 필요없지만, patch 시 path variable 설정이 필요*/


}
