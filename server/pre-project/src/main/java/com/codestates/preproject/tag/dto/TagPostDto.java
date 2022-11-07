package com.codestates.preproject.tag.dto;

import com.codestates.preproject.article.Article;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class TagPostDto {

    private Long tagId;
    private String name;
    private String content;
    private Article article;

    public TagPostDto(String name, String content) {
        this.name = name;
        this.content = content;
    }

}
