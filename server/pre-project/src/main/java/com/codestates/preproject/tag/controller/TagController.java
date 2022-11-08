package com.codestates.preproject.tag.controller;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.article.ArticleService;
import com.codestates.preproject.response.MultiResponseDto;
import com.codestates.preproject.response.SingleResponseDto;
import com.codestates.preproject.tag.dto.*;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.mapper.TagMapper;
import com.codestates.preproject.tag.service.TagService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;

@RestController
@Validated
@RequestMapping("/tag")
public class TagController {

    private final TagService tagService;
    private final TagMapper tagMapper;
    private final ArticleService articleService;

    public TagController(TagService tagService, TagMapper tagMapper, ArticleService articleService) {

        this.tagService = tagService;
        this.tagMapper = tagMapper;
        this.articleService = articleService;
    }

    // 태그 1개 검색
    @GetMapping("/{tag-id}")
    public ResponseEntity getTag (@PathVariable("tag-id")
                                  @Positive Long tagId) {

        Tag tag = tagService.findTag(tagId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(tagMapper.tagToTagResponse(tag)),
                HttpStatus.OK);

//        Tag tag = tagService.findTag(name);
//
//        if (tag == null) {
//            return new ResponseEntity("NOT_EXIST", HttpStatus.OK);
//        }
//
//        TagDto.TagFind tagFind = new TagDto.TagFind();
//
//        tagFind.setTagId(tag.getTagId());
//        tagFind.setName(tag.getName());
//        tagFind.setDescription(tag.getContent());
//
//        return new ResponseEntity(tagFind, HttpStatus.OK);
    }

    // 태그 전체 조회
//    @GetMapping("/all")
//    public ResponseEntity tagFinds(@Positive @RequestParam(value = "page",defaultValue = "0") int page,
//                                   @Positive @RequestParam(value = "size",defaultValue = "15") int size,
//                                   Long articleId) {
//
//        Page<Tag> tagPage = tagService.findTags(articleId, page - 1, size);
//
//        List<Tag> tags = tagPage.getContent();
//
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(tagMapper.tagsToTagResponse(tags), tagPage),
//                HttpStatus.OK);

//        List<Tag> tags = tagService.findTags();
//        List<TagInfo> tagInfos = new ArrayList<>();
//        TagInfo.TagsInfo tagsInfo = new TagInfo.TagsInfo();
//        TagInfo tagInfo;
//
//        for (Tag tag : tags) {
//
//            tagInfo = new TagInfo();
//
//            tagInfo.setTagId(tagInfo.getTagId());
//            tagInfo.setName(tagInfo.getName());
//
//            tagInfos.add(tagInfo);
//        }
//
//        tagsInfo.setTags(tagInfos);
//
//        return new ResponseEntity(tagsInfo, HttpStatus.OK);
    }

//    // 태그 생성
//    @PostMapping("/{tag-id}")
//    public ResponseEntity postTag(@RequestBody TagPostDto tagPostDto,
//                                  @PathVariable("tag-id") Long tagId) {
//
//        Tag tag = tagService.createTag(tagMapper.tagPostToTag(tagPostDto));
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(tagMapper.tagToTagResponse(tag)),
//                HttpStatus.CREATED);
//
//    }

//    // 태그 수정
//    @PatchMapping("/{tag-id}")
//    public ResponseEntity patchTag(@RequestBody TagPatchDto tagPatchDto,
//                                   @PathVariable("tag-id") Long tagId) {
//
//        tagPatchDto.setTagId(tagId);
//
//        Tag tag = tagService.updateTag(tagMapper.tagPatchToTag(tagId, tagPatchDto));
//
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(tagMapper.tagToTagResponse(tag)),
//                HttpStatus.OK);
//    }
//
//    // 태그 삭제
//    @DeleteMapping("/{tag-id}")
//    public ResponseEntity deleteTag(
//            @PathVariable("tag-id") @Positive Long tagId) {
//
//        tagService.deleteTag(tagId);
//
//        return new ResponseEntity<>(new TagDeleteDto(tagId), HttpStatus.OK);
//    }
//}
