package com.codestates.preproject.article;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.factory.StubData;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.function.Executable;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;


import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

import static org.junit.jupiter.api.Assertions.assertThrows;
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
    @DisplayName("없는 id라면 게시글을 조회할 수 없다")
    @Test
    void findArticle_byId_Fail() {
        //given
        long articleId =1L;
        Article article = StubData.MockArticle.getSingleResponseBody(articleId);

        //Stubbing by Mockito
        given(articleRepository.findById(articleId)).willReturn(Optional.ofNullable(article));

        //when
        Executable executable = () -> articleService.findArticle(articleId);

        //then
        assertThrows(BusinessLogicException.class, executable);
    }
}