package com.codestates.preproject.comment.controller;

import com.codestates.preproject.comment.mapper.CommentMapper;
import com.codestates.preproject.comment.service.CommentService;
import com.codestates.preproject.comment.dto.CommentDto;
import com.codestates.preproject.comment.dto.SingleResponseDto;
import com.codestates.preproject.comment.entity.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/comment")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;

    //에러 방지를 위해 일단 주석처리 했습니다.
    //private final ArticleService articleService;
    //private final UserService userService;

    public CommentController(CommentService commentService, CommentMapper commentMapper) {
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    private final Map<Long, Map<String, Object>> contents = new HashMap<>();
    @PostConstruct
    public void init() {
        Map<String, Object> member1 = new HashMap<>();
        long memberId = 1L;
        member1.put("contentId", 1);
        member1.put("username", "김씨");
        member1.put("content", "하이하이");

        contents.put(memberId, member1);
    }

    // 댓글 생성
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post requestBody) {

        Comment comment = commentMapper.commentPostToComment(requestBody);
        long commentId = comment.getCommentId();

        // 확인 필요: ~[classes/:na]
        Comment createdComment = commentService.createComment(commentId, comment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(commentMapper.commentToCommentResponse(createdComment)),
                HttpStatus.CREATED);
    }
}
