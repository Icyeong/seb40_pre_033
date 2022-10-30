package com.codestates.preproject.article;

import com.codestates.preproject.common.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/article")//인입 url설정
public class ArticleController {
    private final ArticleMapper mapper;
    private final ArticleService articleService;

/*    @PostMapping
    public ResponseEntity<ArticleResponse> postArticle(@Valid @RequestBody ArticlePost articlePost){
        Article article = mapper.articlePostToArticle(articlePost);
        articleService.createArticle(article);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }*/
    @PostMapping
    public ResponseEntity<SingleResponseDto<ArticleResponse>> postArticle(@Valid @RequestBody ArticlePost articlePost) {
        Article article = articleService.createArticle(mapper.articlePostToArticle(articlePost));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(article))
                , HttpStatus.OK);
    }


    @GetMapping("/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> getArticle(
            @PathVariable("article-id") @Positive long articleId) {
        Article article = articleService.findArticle(articleId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(article))
                , HttpStatus.OK);
    }
/*    @GetMapping("/articles")
    public ResponseEntity getArticles(@Positive@RequestParam("page") int page,
                                      @Positive@RequestParam("size") int size,
                                      @RequestParam("sort") String sort){
        Page<Article> articlePage = articleService.findArticles();
    }*/


    }
