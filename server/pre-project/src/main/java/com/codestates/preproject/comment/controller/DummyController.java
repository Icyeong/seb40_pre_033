package com.codestates.preproject.comment.controller;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.article.ArticleService;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.service.CommentService;
import com.codestates.preproject.user.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

@RestController
@RequestMapping("/")
public class DummyController {

    private final CommentService commentService;
    private final ArticleService articleService;
    private final UserService userService;

    public DummyController(CommentService commentService, ArticleService articleService, UserService userService) {
        this.commentService = commentService;
        this.articleService = articleService;
        this.userService = userService;
    }

    @PostConstruct
    public void init() {

        // *************** 1번 게시물 *************** //

        Article article = Article.builder()
                .articleId(1L)
                .title("안녕하세요. 점심 뭐 드시나요??")
                .content("안녕히가세요")
                .email("b@b.com")
                .build();
        articleService.createArticle(article);

        Comment comment = Comment.builder()
                .commentId(1)
                .content("밥 말아 먹어요~~")
                .article(article)
                .email("a@a.com")
                .vote(1)
                .build();
        commentService.createComment(comment);

        comment = Comment.builder()
                .commentId(2)
                .content("잘 챙겨 드세요~~!")
                .article(article)
                .email("b@b.com")
                .vote(100)
                .build();
        commentService.createComment(comment);
    }
}
