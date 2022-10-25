package com.codestates.preproject.article;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ArticleRepository extends JpaRepository<Article, Long> {
}
