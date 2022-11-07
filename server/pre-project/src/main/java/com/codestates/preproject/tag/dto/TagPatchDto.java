package com.codestates.preproject.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
public class TagPatchDto {

    private Long tagId;
    private String name;
    private String content;

    public TagPatchDto(String name, String content) {
        this.name = name;
        this.content = content;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

}
