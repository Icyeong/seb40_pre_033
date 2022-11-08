package com.codestates.preproject.tag.dto;

import com.codestates.preproject.article.Article;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TagPostDto {

    private Long tagId;
    private List<String> name;

    public TagPostDto(List<String> name) {
        this.name = name;
    }

}
