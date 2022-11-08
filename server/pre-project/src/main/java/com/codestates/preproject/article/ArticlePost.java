package com.codestates.preproject.article;

import com.codestates.preproject.tag.entity.Tag;
import lombok.*;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.List;
import java.util.Map;

@Getter
@NoArgsConstructor
public class ArticlePost implements Serializable {
    @NotEmpty(message="제목을 입력해주세요.")
    private String title;
    @NotEmpty(message="내용을 입력해주세요.")
    private String content;
    private String email;


    public ArticlePost(String title, String contents) {
        this.title = title;
        this.content = contents;
    }

    public void setUserEmail(String email) {
        this.email = email;
    }

}