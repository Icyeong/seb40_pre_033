package com.codestates.preproject.reply.repository;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.reply.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long> {

    Reply findByReplyId(long replyId);
//    List<Reply> findByReplies(Comment comment);
}
