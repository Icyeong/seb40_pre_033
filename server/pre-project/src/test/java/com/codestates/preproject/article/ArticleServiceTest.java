package com.codestates.preproject.article;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;


import static org.assertj.core.api.Assertions.*;

import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)//슬라이스 테스트를 위해 MockitoExtension 적용
class ArticleServiceTest {
    @Mock
    private ArticleRepository articleRepository;
    @InjectMocks
    private ArticleService articleService;

    @Test
    @DisplayName("게시글 작성 테스트")
    void createArticleTest(){
        //given
        Article article = Article.builder()
                .title("질문제목")
                .contents("질문을할까용말까용")
                .build();
        given(articleRepository.save(Mockito.any(Article.class)))
                .willReturn(article);
        //when, then
        assertThat(articleService.createArticle(article)).isEqualTo(article);

    }

}