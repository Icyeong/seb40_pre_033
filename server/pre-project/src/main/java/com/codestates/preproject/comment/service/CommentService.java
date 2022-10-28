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
    public Comment createCommet(Comment comment) {
        
        // 로그인 한 계정인지 확인
        return commentRepository.save(comment);
    }

    // TODO 유저 관련 메서드 생성 필요
    
    // TODO 로그인 한 계정인지 확인하는 메서드 추가 필요
}
