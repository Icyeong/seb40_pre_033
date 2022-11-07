package com.codestates.preproject.tag.dto;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.article.ArticleResponse;
import com.codestates.preproject.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TagResponseDto {

    private Long tagId;
    private String name;
    private String content;

    public TagResponseDto(String name, String content) {
        this.name = name;
        this.content = content;
    }

    public static TagResponseDto of(Tag tag) {
        return new TagResponseDto(tag.getContent(), tag.getName());
    }

}
