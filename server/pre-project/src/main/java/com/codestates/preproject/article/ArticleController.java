package com.codestates.preproject.article;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.service.CommentService;
import com.codestates.preproject.response.MultiResponseDto;
import com.codestates.preproject.response.SingleResponseDto;
import com.codestates.preproject.tag.dto.TagPostDto;
import com.codestates.preproject.tag.dto.TagResponseDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.mapper.TagMapper;
import com.codestates.preproject.tag.service.TagService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
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
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
public class ArticleController {
    private final ArticleMapper mapper;

    private final TagMapper tagMapper;
    private final ArticleService articleService;
    private final CommentService commentService;
    private final TagService tagService;

    /*게시글 등록*/
    @PostMapping("/article")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> postArticle(@Valid @RequestBody ObjectNode saveObj, Long articleId) throws JsonProcessingException {

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        ObjectMapper objectMapper = new ObjectMapper();

        ArticlePost articlePost = objectMapper.treeToValue(saveObj.get("article"), ArticlePost.class);

        List<String> tags = objectMapper.treeToValue(saveObj.get("tags"), objectMapper.getTypeFactory().constructCollectionType(List.class, String.class));
        List<Tag> tagList = tags.stream().map(tag -> Tag.builder().name(tag).build()).collect(Collectors.toList());

        articlePost.setUserEmail(email);
        ArticleResponse article = articleService.makeArticle(mapper.articlePostToArticle(articlePost),email, tagList);

        return new ResponseEntity<>(
                new SingleResponseDto<>(article)
                , HttpStatus.OK);
    }

    /*게시글 수정*/
    @PatchMapping("/article/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> patchArticle(@PathVariable("article-id") @Positive long articleId,
                                                                           @Valid @RequestBody ArticlePatch articlePatchDto) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        articlePatchDto.setArticleId(articleId);

        Article updatedArticle = articleService.updateArticle(mapper.articlePatchToArticle(articlePatchDto), email);

        return new ResponseEntity<>(
                new SingleResponseDto<>(ArticleResponse.by(updatedArticle)),
                HttpStatus.OK);
    }

    /*게시글 1개 조회*/
    @GetMapping("/article/{article-id}")
    public ResponseEntity<SingleResponseDto<ArticleResponse>> getArticle(
            @PathVariable("article-id") @Positive long articleId) {

        return new ResponseEntity<>(
                new SingleResponseDto<>(articleService.findArticleResponse(articleId)),
                HttpStatus.OK);
    }

     /*전체 아티클 조회*/
    @GetMapping("/articles")
    public ResponseEntity<MultiResponseDto<ArticleResponse>> getArticles(@Positive @RequestParam(value = "page",defaultValue = "0") int page,
                                                                         @Positive @RequestParam(value = "size",defaultValue = "15") int size) {

        return new ResponseEntity<>(articleService.findArticles(page -1, size) , HttpStatus.OK);
    }

     /*아티클 삭제*/
    @DeleteMapping("/article/{article-id}")
    public ResponseEntity<ArticleDeleteResponse> deleteArticle(@PathVariable("article-id") @Positive long articleId){

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        articleService.deleteArticle(articleId);

        return new ResponseEntity<>(
                new ArticleDeleteResponse(articleId), HttpStatus.OK);
    }

}
