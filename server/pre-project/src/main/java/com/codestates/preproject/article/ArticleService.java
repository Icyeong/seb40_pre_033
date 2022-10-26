package com.codestates.preproject.article;


@Service
public class ArticleService {
    private final ArticleRepository articleRepository;
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }


    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }
}
