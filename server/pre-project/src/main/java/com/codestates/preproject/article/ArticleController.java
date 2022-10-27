package com.codestates.preproject.article;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@AllArgsConstructor
@RequestMapping("v1/article")//인입 url설정
public class ArticleController {
    private final ArticleMapper mapper;
    private final ArticleService articleService;

    @PostMapping
    public ResponseEntity postArticle(@Valid @RequestBody ArticlePost articlePost){
        Article article = mapper.articlePostToArticle(articlePost);
        articleService.createArticle(article);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
