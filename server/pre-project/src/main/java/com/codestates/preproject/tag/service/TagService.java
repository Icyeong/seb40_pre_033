package com.codestates.preproject.tag.service;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.tag.dto.TagPostDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.repository.TagRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TagService {

    private TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    // 태그 1개 조회
    @Transactional
    public Tag findTag(String name) {

        Tag tag = tagRepository.findByName(name);

        if (tag == null) {
        }

        return tag;

    }

    // 태그 전체 조회
    @Transactional
    public List<Tag> findTags() {
        return tagRepository.findAll();
    }

    // 태그 생성
    @Transactional
    public Tag createTag(TagPostDto tagPostDto) {

        Tag tag = tagRepository.findByName(tagPostDto.getName());

        if (tag == null) {
            tag = new Tag();
            tag.setName(tagPostDto.getName());
            tag.setContent(tagPostDto.getContent());

            tagRepository.save(tag);
        }

        return tag;

    }

    // 태그 수정
    @Transactional
    public Tag updateTag(Tag tag) {

        Tag findTag = findVerifiedTag(tag.getTagId());

        Optional.ofNullable(tag.getContent())
                .ifPresent(content -> findTag.setContent(content));

        return tagRepository.save(findTag);
    }

    // 태그 삭제
    @Transactional
    public void deleteTag(Long tagId) {

        Tag findTag = tagRepository.findByTagId(tagId);

        tagRepository.deleteById(tagId);
    }

    // 태그 조회 실패
    public Tag findVerifiedTag(Long tagId) {

        Optional<Tag> optionalTag = tagRepository.findById(tagId);

        Tag findTag = optionalTag.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));

        return findTag;
    }


    // 더미 사용
    @Transactional
    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }

}
