package com.codestates.preproject.article;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import  static org.assertj.core.api.Assertions.*;

@DataJpaTest
class ArticleRepositoryTest {
    @Autowired
    private ArticleRepository articleRepository;

    @Test
    @DisplayName("게시글레파지토리 생성")
    void testArticleRepository(){
        assertThat(articleRepository).isNotNull();
    }
    @Test
    @DisplayName("게시글 등록 테스트")
    void testCreateArticle() {
        //given
        final Article article = article.builder()
                .title("질문제목")
                .contents("질문내용")
                .build();
        //when
        final Article result = articleRepository.save(article);

        //then
        assertThat(result.getArticleId()).isNotNull();
        assertThat(result.getContents()).isEqualTo("질문내용");
        assertThat(result.getTitle()).isEqualTo("질문제목");
    }
}