package com.codestates.preproject.article;

import com.codestates.preproject.response.MultiResponseDto;
import com.codestates.preproject.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping
@Validated
public class ArticleController {
    private final ArticleMapper mapper;
    private final ArticleService articleService;

    /*게시글 등록*/
    @PostMapping("/article")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> postArticle(@Valid @RequestBody ArticlePost articlePost) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Article article = articleService.createArticle(mapper.articlePostToArticle(articlePost));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(article))
                , HttpStatus.CREATED);
    }

    /*게시글 수정*/
    @PatchMapping("/article/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> patchArticle(@PathVariable("article-id") @Positive long articleId,
                                                                           @Valid @RequestBody ArticlePatch articlePatchDto) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        articlePatchDto.setArticleId(articleId);
        Article updatedArticle = articleService.updateArticle(mapper.articlePatchToArticle(articlePatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(updatedArticle)),
                HttpStatus.OK);
    }

    /*게시글 1개 조회*/
    @GetMapping("/article/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> getArticle(
            @PathVariable("article-id") @Positive long articleId) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Article article = articleService.findArticle(articleId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(article))
                , HttpStatus.OK);
    }

    @GetMapping("/articles")
    public ResponseEntity<MultiResponseDto<ArticleResponse>> getArticles(@Positive @RequestParam(value = "page",defaultValue = "0") int page,
                                                                         @Positive @RequestParam(value = "size",defaultValue = "15") int size) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Page<Article> articlesInPage = articleService.findArticles(page - 1, size);
        List<Article> articles = articlesInPage.getContent();

        return new ResponseEntity<MultiResponseDto<ArticleResponse>>(new MultiResponseDto<>(mapper.articlesToArticleResponses(articles), articlesInPage), HttpStatus.OK);
    }

}
