package com.codestates.preproject.tag.dto;

import lombok.Getter;

@Getter
public class TagDeleteDto {

    private Long tagId;

    public TagDeleteDto(Long tagId) {
        this.tagId = tagId;
    }

}
