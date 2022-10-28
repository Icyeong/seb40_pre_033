package com.codestates.preproject.comment.controller;

import com.codestates.preproject.comment.dto.CommentPatchDto;
import com.codestates.preproject.comment.dto.CommentPostDto;
import com.codestates.preproject.comment.mapper.CommentMapper;
import com.codestates.preproject.comment.service.CommentService;
import com.codestates.preproject.response.SingleResponseDto;
import com.codestates.preproject.comment.entity.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/comment")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;

    //에러 방지를 위해 일단 주석처리 했습니다.
    //private final ArticleService articleService;
    //private final UserService userService;

    /* -------------------------- 1번 게시물 -------------------------- */

    @PostConstruct
    public void init() {
        Comment comment = Comment.builder()
                .commentId(1)
                .username("김씨")
                .content("안녕하세요. 안녕히가세요.")
                .build();
        commentService.createComment(comment);
    }


    public CommentController(CommentService commentService, CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    // 댓글 조회
    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(
            @PathVariable("comment-id") @Positive long commentId) {

        Comment comment = commentService.findComment(commentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(commentMapper.commentToCommentResponse(comment)),
                HttpStatus.OK
        );
    }


    // 댓글 생성
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentPostDto commentPostDto) {

        Comment comment = commentMapper.commentPostToComment(commentPostDto);
//        long commentId = comment.getCommentId();

        Comment createdComment = commentService.createComment(comment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(commentMapper.commentToCommentResponse(createdComment)),
                HttpStatus.CREATED);

    }

    // 댓글 수정
    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(
            @PathVariable("comment-id") @Positive long commentId,
            @Valid @RequestBody CommentPatchDto commentPatchDto) {

        commentPatchDto.setCommentId(commentId);

        Comment comment = commentService.updateComment(commentMapper.commentPatchToComment(commentPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(commentMapper.commentToCommentResponse(comment)),
                HttpStatus.OK);
    }


}
