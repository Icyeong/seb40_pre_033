package com.codestates.preproject.article;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;

import java.util.List;

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
    void testSaveArticle() {
        //given
        final Article article = Article.builder()
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

    @DisplayName("전체 게시글을 최신순으로 가져온다.")
    @Test
    void findAllArticle_Success() {
/*        // given - mockUsers 추가 예정
        User tester = UserFactory.user("tester");
        List<User> mockUsers = List.of(
                UserFactory.user("a1"),
                UserFactory.user("a2"),
                UserFactory.user("a3"),
                UserFactory.user("a4"),
                UserFactory.user("a5"),
                UserFactory.user("a6"),
                UserFactory.user("a7"),
                UserFactory.user("a8")
        );
        userRepository.save(tester);
        userRepository.saveAll(mockUsers);
*/
        // given - mockArticles
        List<Article> mockArticles = ArticleFactory.mockArticles; //By(mockUsers); 추가 예정
        Article testerArticle = ArticleFactory.mockArticleBy(tester);
        ArticleRepository.saveAll(mockArticles);
        ArticleRepository.save(testerArticle);

        flushAndClear();

        // when
        List<Article> feeds =
                ArticleRepository.findAll(tester, PageRequest.of(0, 10));

        // then
        assertThat(feeds)
                .extracting("user")
                .extracting("basicProfile")
                .extracting("name")
                .containsExactly("tester", "a7", "a5", "a3", "a1");
    }

    private void flushAndClear() {
        testEntityManager.flush();
        testEntityManager.clear();
    }



}