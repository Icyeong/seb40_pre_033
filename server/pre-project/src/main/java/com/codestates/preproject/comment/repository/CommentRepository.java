package com.codestates.preproject.comment.repository;

import com.codestates.preproject.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Long> {

    Comment findByCommentId(long commentId);
    List<Comment> findByUsername(String username);

    // TODO findByArticle 추가 필요
    // List<Comment> findByArticle(Article article);
}
