package com.codestates.preproject.article;

import com.codestates.preproject.exception.ErrorResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

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
