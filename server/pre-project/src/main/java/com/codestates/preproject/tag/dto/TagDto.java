package com.codestates.preproject.tag.dto;

import com.codestates.preproject.article.Article;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class TagDto {

    String name;
    String content;

    // 태그 1개 조회
    @Getter
    @Setter
    public static class TagFind {

        Long tagId;
        String name;
        String description;
    }

}
