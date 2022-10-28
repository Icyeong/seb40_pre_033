package com.codestates.preproject.article;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import com.google.gson.Gson;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import static org.junit.jupiter.api.Assertions.*;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ArticleControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;

    @MockBean
    private ArticleService articleService;

    @Test
    @DisplayName("필요한 필드 post요청 시 생성됐다는 상태 보이기 ")
    void postArticleTest() throws Exception {
        //given title, content, (email), vote, (createAt)
        Article article = Article.builder()
                .title("제목예시")
                .contents("내용예시")
                .build();
        String content = gson.toJson(article);
        //when
        ResultActions actions =
                mockMvc.perform(
                        post("/v1/article")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );
        //then
        MvcResult result = actions
                .andExpect(status().isCreated())
                .andReturn();
    }


}