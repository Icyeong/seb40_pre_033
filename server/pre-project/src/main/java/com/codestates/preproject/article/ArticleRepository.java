package com.codestates.preproject.article;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findAllByUser_userId(@Param(value = "userId") Long userId);
}
