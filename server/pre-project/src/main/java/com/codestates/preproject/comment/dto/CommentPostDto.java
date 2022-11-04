package com.codestates.preproject.comment.dto;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.reply.entity.Reply;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentPostDto {

    private String email;

    @NotBlank(message="내용을 입력해주세요.")
    private String content;

    private Long articleId;

    private List<Reply> replies;

    public CommentPostDto(String content) {
        this.content = content;
    }

    public void setUserEmail(String email) {
        this.email = email;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

}
