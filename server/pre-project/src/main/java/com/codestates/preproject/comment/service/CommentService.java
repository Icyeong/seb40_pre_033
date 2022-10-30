package com.codestates.preproject.comment.service;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.repository.CommentRepository;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    // TODO 유저 관련 메서드 생성 필요

    // TODO 로그인 한 계정인지 확인하는 메서드 추가 필요

    private final CommentRepository commentRepository;

    // private final UserRepository userRepository;

    public CommentService(CommentRepository commentRepository) {

        this.commentRepository = commentRepository;
    }

    // 답변 조회
    public Comment findComment(long commentId) {
        return commentRepository.findByCommentId(commentId);
    }

    // 답변 생성
    public Comment createComment(Comment comment) {
        
        // TODO 로그인 한 계정인지 확인

        return commentRepository.save(comment);
    }

    // 답변 수정
    public Comment updateComment(Comment comment) {

        Comment findComment = commentRepository.findByCommentId(comment.getCommentId());
        findComment.setContent(comment.getContent());

        return commentRepository.save(findComment);
    }

    // 답변 삭제
    public void deleteComment(long commentId) {

        Comment findComment = commentRepository.findByCommentId(commentId);

        commentRepository.delete(findComment);
    }

}
