package com.codestates.preproject.comment.service;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.repository.CommentRepository;
import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CommentService {

    // TODO 유저 관련 메서드 생성 필요

    // TODO 로그인 한 계정인지 확인하는 메서드 추가 필요

    private final CommentRepository commentRepository;

    private final UserRepository userRepository;

    public CommentService(UserRepository userRepository, CommentRepository commentRepository) {

        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
    }

    // 답변 조회
    public Comment findComment(long commentId) {
        return commentRepository.findByCommentId(commentId);
    }

    // 답변 생성
    @Transactional
    public Comment createComment(Comment comment, String email) {

        Optional<User> optionalUser = userRepository.findByEmail(email);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        /*에러가 뜨면 에러 던지고 아닌 경우 받아옴*/

        comment.setUser(findUser);
        comment.setEmail(email);

        return commentRepository.save(comment);
    }

    // 답변 수정
    @Transactional
    public Comment updateComment(Comment comment) {

//        Comment findComment = commentRepository.findByCommentId(comment.getCommentId());
//        findComment.setContent(comment.getContent());
        Comment findComment = findVerifiedComment(comment.getCommentId());

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));

        return commentRepository.save(findComment);
    }

    // 답변 삭제
    @Transactional
    public void deleteComment(long commentId) {

        Comment findComment = commentRepository.findByCommentId(commentId);

        commentRepository.delete(findComment);
    }

    // 답변 조회 실패
    public Comment findVerifiedComment(long commentId){

        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        Comment findComment = optionalComment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }

    // 답변 이미 존재
    public ExceptionCode exceptionCode = ExceptionCode.COMMENT_EXIST;

}
