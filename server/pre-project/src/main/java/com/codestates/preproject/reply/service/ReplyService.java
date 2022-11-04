package com.codestates.preproject.reply.service;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.reply.entity.Reply;
import com.codestates.preproject.reply.repository.ReplyRepository;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ReplyService {

    private final ReplyRepository replyRepository;

    private final UserRepository userRepository;

    public ReplyService(ReplyRepository replyRepository, UserRepository userRepository) {
        this.replyRepository = replyRepository;
        this.userRepository = userRepository;
    }

    // 리댓 1개 조회
    @Transactional
    public Reply findReply(long replyId) {
        return replyRepository.findByReplyId(replyId);
    }

    // 리댓 전체 조회
    @Transactional
    public List<Reply> findReplies() {

        return replyRepository.findAll();
    }

    // 리댓 생성
    @Transactional
    public Reply createReply(Reply reply, String email, long commentId) {

        Optional<User> optionalUser = userRepository.findByEmail(email);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        /*에러가 뜨면 에러 던지고 아닌 경우 받아옴*/

        reply.setUser(findUser);
        reply.setEmail(email);
        reply.setCommentId(commentId);

        return replyRepository.save(reply);
    }

    // 리댓 수정
    @Transactional
    public Reply updateReply(Reply reply) {

        Reply findReply = replyRepository.findByReplyId(reply.getReplyId());

        findReply.setReplyContent(reply.getReplyContent());

        return replyRepository.save(findReply);
    }

    // 리댓 삭제
    @Transactional
    public void deleteReply(long replyId) {

        Reply findReply = findVerifiedReply(replyId);

        replyRepository.delete(findReply);
    }

    // 리댓 조회 실패
    public Reply findVerifiedReply(long replyId) {

        Optional<Reply> optionalReply = replyRepository.findById(replyId);

        Reply findReply = optionalReply.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.REPLY_NOT_FOUND));

        return findReply;
    }

    // 리댓이 이미 존재
    public ExceptionCode exceptionCode = ExceptionCode.REPLY_EXIST;

    // 더미 사용
    public Reply createReply(Reply reply) {
        return replyRepository.save(reply);
    }

}
