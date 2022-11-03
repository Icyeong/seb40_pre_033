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
                .articleId(1L)
                .commentId(1)
                .content("밥 말아 먹어요~~")
                .email("a@a.com")
                .vote(1)
                .build();
        commentService.createComment(comment);

        comment = Comment.builder()
                .articleId(1L)
                .commentId(2)
                .content("잘 챙겨 드세요~~!")
                .email("b@b.com")
                .vote(100)
                .build();
        commentService.createComment(comment);


        // *************** 2번 게시물 *************** //

        article = Article.builder()
                .articleId(2L)
                .title("하리보가 안대요")
                .content("왜죠?")
                .email("b@b.com")
                .build();
        articleService.createArticle(article);

        comment = Comment.builder()
                .articleId(2L)
                .commentId(1)
                .content("그러게요")
                .email("a@a.com")
                .vote(1)
                .build();
        commentService.createComment(comment);

        comment = Comment.builder()
                .articleId(2L)
                .commentId(2)
                .content("돌아와 하리보~~~~")
                .email("b@b.com")
                .vote(100)
                .build();
        commentService.createComment(comment);

        // *************** 3번 게시물 *************** //

        article = Article.builder()
                .articleId(3L)
                .title("벌써 11월이라니 시간 잘 가네요")
                .content(":(")
                .email("b@b.com")
                .build();
        articleService.createArticle(article);

        comment = Comment.builder()
                .articleId(3L)
                .commentId(1)
                .content("2022년 안녕~~")
                .email("a@a.com")
                .vote(7890)
                .build();
        commentService.createComment(comment);

        // *************** 4번 게시물 *************** //

        article = Article.builder()
                .articleId(4L)
                .title("코딩코딩 랄랄랄")
                .content("그냥 적어봤어요")
                .email("b@b.com")
                .build();
        articleService.createArticle(article);

        comment = Comment.builder()
                .articleId(4L)
                .commentId(1)
                .content("관종인가봐 ㅡㅡ")
                .email("a@a.com")
                .vote(-1)
                .build();
        commentService.createComment(comment);

        comment = Comment.builder()
                .articleId(4L)
                .commentId(2)
                .content("황당하내요")
                .email("b@b.com")
                .vote(-1)
                .build();
        commentService.createComment(comment);

        // *************** 5번 게시물 *************** //

        article = Article.builder()
                .articleId(5L)
                .title("오늘 수요일인가요??")
                .content("헤헤")
                .email("b@b.com")
                .build();
        articleService.createArticle(article);

        comment = Comment.builder()
                .articleId(5L)
                .commentId(1)
                .content("목요일.")
                .email("a@a.com")
                .vote(0)
                .build();
        commentService.createComment(comment);

        comment = Comment.builder()
                .articleId(5L)
                .commentId(2)
                .content("목요일인데 뭔 소리 하시는지 ㅡㅡ")
                .email("b@b.com")
                .vote(123)
                .build();
        commentService.createComment(comment);

        comment = Comment.builder()
                .articleId(5L)
                .commentId(3)
                .content("저런저런")
                .email("c@c.com")
                .vote(2)
                .build();
        commentService.createComment(comment);

        // *************** 6번 게시물 *************** //

        article = Article.builder()
                .articleId(6L)
                .title("주말에 뭐하시나요??")
                .content("궁금궁금")
                .email("b@b.com")
                .build();
        articleService.createArticle(article);

        comment = Comment.builder()
                .articleId(6L)
                .commentId(1)
                .content("별다궁~")
                .email("a@a.com")
                .vote(-1)
                .build();
        commentService.createComment(comment);

        // *************** 7번 게시물 *************** //

        article = Article.builder()
                .articleId(7L)
                .title("티비 요즘 뭐가 좋나요??")
                .content("모르게써요")
                .email("b@b.com")
                .build();
        articleService.createArticle(article);

        comment = Comment.builder()
                .articleId(7L)
                .commentId(1)
                .content("몰라여~ 내공냠냠")
                .email("a@a.com")
                .vote(-100)
                .build();
        commentService.createComment(comment);

    }
}
