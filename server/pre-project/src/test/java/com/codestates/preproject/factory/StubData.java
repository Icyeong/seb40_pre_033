package com.codestates.preproject.factory;

import com.codestates.preproject.article.Article;

public class StubData {
    public static class MockArticle {
        public static Article getSingleResponseBody(long articleId) {
            Article article = Article.builder()
                    .title("질문제목")
                    .contents("질문을할까용말까용")
                    .articleId(articleId)
                    .build();
            return article;
        }
    }
}
