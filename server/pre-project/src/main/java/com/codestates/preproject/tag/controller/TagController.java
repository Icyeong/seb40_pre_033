package com.codestates.preproject.tag.controller;

import com.codestates.preproject.tag.dto.TagDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.service.TagService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping("/TagFind")
    public ResponseEntity tagFind(@RequestParam String name) {

        Tag tag = tagService.findTag(name);

        if (tag == null) {
            return new ResponseEntity("NOT_EXIST", HttpStatus.OK);
        }

        TagDto.TagFind tagFind = new TagDto.TagFind();

        tagFind.setTagId(tag.getTagId());
        tagFind.setName(tag.getName());
        tagFind.setDescription(tag.getContent());

        return new ResponseEntity(tagFind, HttpStatus.OK);
    }

    @GetMapping("/TagFinds")
    public ResponseEntity tagFinds() {

        List<Tag> tags = tagService.findTags();
        List<TagDto.TagInfo> tagInfos = new ArrayList<>();
        TagDto.TagsInfo tagsInfo = new TagDto.TagsInfo();
        TagDto.TagInfo tagInfo;

        for (Tag tag : tags) {

            tagInfo = new TagDto.TagInfo();

            tagInfo.setTagId(tagInfo.getTagId());
            tagInfo.setName(tagInfo.getName());

            tagInfos.add(tagInfo);
        }

        tagsInfo.setTags(tagInfos);

        return new ResponseEntity(tagsInfo, HttpStatus.OK);
    }
}
