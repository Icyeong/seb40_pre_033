package com.codestates.preproject.tag.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class TagInfo {

    Long tagId;
    String name;

    @Getter
    @Setter
    public static class TagsInfo {
        List<TagInfo> tags;
    }
}