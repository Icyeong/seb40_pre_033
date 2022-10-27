package com.codestates.preproject.comment.service;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.repository.CommentRepository;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    // private final UserRepository userRepository;

    public CommentService(CommentRepository commentRepository) {

        this.commentRepository = commentRepository;
    }

    // 답변 생성
    public Comment createComment(long commentId, Comment comment) {

        Comment createComment = comment;

        // 확인 필요  ~[classes/:na]
        return commentRepository.save(comment);
    }

    // TODO 유저 관련 메서드 생성 필요
}
