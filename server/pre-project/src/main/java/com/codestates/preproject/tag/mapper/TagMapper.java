package com.codestates.preproject.tag.mapper;

import com.codestates.preproject.tag.dto.TagDto;
import com.codestates.preproject.tag.dto.TagPatchDto;
import com.codestates.preproject.tag.dto.TagPostDto;
import com.codestates.preproject.tag.dto.TagResponseDto;
import com.codestates.preproject.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {

    Tag tagPostToTag(TagPostDto tagPostDto);

    Tag tagPatchToTag(Long tagId, TagPatchDto tagPatchDto);

    TagResponseDto tagToTagResponse(Tag tag);

    List<TagResponseDto> tagsToTagResponse(List<Tag> tags);
}
