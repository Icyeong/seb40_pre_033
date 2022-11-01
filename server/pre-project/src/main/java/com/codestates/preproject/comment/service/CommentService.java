package com.codestates.preproject.comment.service;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.repository.CommentRepository;
import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    //
    private Comment findVerifiedComment(long commentId){

        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        Comment findComment =
                optionalComment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }

}
