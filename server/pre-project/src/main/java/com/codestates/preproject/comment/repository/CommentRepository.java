package com.codestates.preproject.comment.repository;

import com.codestates.preproject.comment.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Long> {

    Comment findByCommentId(long commentId);

    List<Comment> findAllByUser_userId(@Param(value = "userId") Long userId);

    Page<Comment> findAllByArticleId(Long articleId, Pageable pageable);

}
