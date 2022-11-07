package com.codestates.preproject.tag.service;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
    public Tag findTag(Long tagId) {

        return findVerifiedTag(tagId);

    }

    // 태그 전체 조회
    @Transactional
    public Page<Tag> findTags(Long articleId, int page, int size) {

        return tagRepository.findAllByArticleId(articleId, PageRequest.of(page, size));
    }

    // 태그 생성
    @Transactional
    public Tag createTag(Tag tag) {

//        tag = tagRepository.findByTagId(tagPostDto.getTagId());
//
//        if (tag == null) {
//            tag = new Tag();
//            tag.setName(tagPostDto.getName());
//            tag.setContent(tagPostDto.getContent());
//
//            return tagRepository.save(tag);
//
//        }
//
//        return tag;

        return tagRepository.save(tag);

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


    /*// 더미 사용
    @Transactional
    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }*/

}
