package com.codestates.preproject.article;


import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ArticlePatch {
    private Long articleId;

    private String title;

    private String contents;

/*    @Builder
    public ArticlePatch(Long articleId) {
        this.articleId = articleId;
    } 학습 후 추가할 예정 */


    public ArticlePatch(String title, String contents) {
        this.title = title;
        this.contents = contents;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    /*DTO의 경우 원래 setter가 필요없지만, patch 시 path variable 설정이 필요*/


}
