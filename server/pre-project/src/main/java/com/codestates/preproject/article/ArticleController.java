package com.codestates.preproject.article;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.service.CommentService;
import com.codestates.preproject.response.MultiResponseDto;
import com.codestates.preproject.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@Validated
@Slf4j
public class ArticleController {
    private final ArticleMapper mapper;
    private final ArticleService articleService;
    private final CommentService commentService;

    /*게시글 등록*/
    @PostMapping("/article")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> postArticle(@Valid @RequestBody ArticlePost articlePost) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        articlePost.setUserEmail(email); //email을 set으로 할 것인가 create 시에 넣어줄 것인가?
        Article article = articleService.makeArticle(mapper.articlePostToArticle(articlePost),email);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(article))
                , HttpStatus.CREATED);
    }

    /*게시글 수정*/
    @PatchMapping("/article/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> patchArticle(@PathVariable("article-id") @Positive long articleId,
                                                                           @Valid @RequestBody ArticlePatch articlePatchDto) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        //dto에 id 넣기
        //set은 다 해야 하고, 코멘트 아티클아이디로 조회해야 함
        articlePatchDto.setArticleId(articleId);
//        articlePatchDto
        Article updatedArticle = articleService.updateArticle(mapper.articlePatchToArticle(articlePatchDto), email);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.articleToArticleResponse(updatedArticle)),
                HttpStatus.OK);
    }

    /*게시글 1개 조회*/
    @GetMapping("/article/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> getArticle(
            @PathVariable("article-id") @Positive long articleId) {
        Article article = articleService.findArticle(articleId);
        Page<Comment> commentPage =commentService.findComments(articleId,0,10);

        return new ResponseEntity<>(
                new SingleResponseDto<>(ArticleResponse.of(article, commentPage))
                , HttpStatus.OK);
    }

    @GetMapping("/articles")
    public ResponseEntity<MultiResponseDto<ArticleResponse>> getArticles(@Positive @RequestParam(value = "page",defaultValue = "0") int page,
                                                                         @Positive @RequestParam(value = "size",defaultValue = "15") int size) {
        Page<Article> articlesInPage = articleService.findArticles(page - 1, size);
        List<Article> articles = articlesInPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.articlesToArticleResponses(articles), articlesInPage), HttpStatus.OK);
    }

    @DeleteMapping("/article/{article-id}")
    public ResponseEntity<ArticleDeleteResponse> deleteArticle(@PathVariable("article-id") @Positive long articleId){
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        articleService.deleteArticle(articleId,email);
        return new ResponseEntity<>(
                new ArticleDeleteResponse(articleId), HttpStatus.OK);
    }

}
