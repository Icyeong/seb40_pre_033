package com.codestates.preproject.article;

import com.codestates.preproject.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/article")//인입 url설정
@Validated
public class ArticleController {
    private final ArticleMapper mapper;
    private final ArticleService articleService;

    /*게시글 등록*/
    @PostMapping
    public ResponseEntity<SingleResponseDto<ArticleResponse>> postArticle(@Valid @RequestBody ArticlePost articlePost) {
        Article article = articleService.createArticle(mapper.articlePostToArticle(articlePost));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(article))
                , HttpStatus.CREATED);
    }
    /*게시글 수정*/
    @PatchMapping("/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> patchArticle(@PathVariable("article-id") @Positive long articleId,
                                       @Valid @RequestBody ArticlePatch articlePatchDto) {
        articlePatchDto.setArticleId(articleId);
        Article updatedArticle = articleService.updateArticle(mapper.articlePatchToArticle(articlePatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(updatedArticle)),
                HttpStatus.OK);
    }
    /*게시글 1개 조회*/
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
