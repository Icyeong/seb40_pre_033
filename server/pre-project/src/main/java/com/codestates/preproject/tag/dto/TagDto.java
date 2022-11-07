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

    @Getter
    @Setter
    @AllArgsConstructor
    public class TagPost {
        String name;
        String content;
        Article article;
    }

    @Getter
    @Setter
    public static class TagFind {

        Long tagId;
        String name;
        String description;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class TagInfo {

        Long tagId;
        String name;
    }

    @Getter
    @Setter
    public static class TagsInfo {
        List<TagInfo> tags;
    }


}
