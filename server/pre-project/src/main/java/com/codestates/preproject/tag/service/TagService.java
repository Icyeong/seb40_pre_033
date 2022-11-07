package com.codestates.preproject.tag.service;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.tag.dto.TagDto;
import com.codestates.preproject.tag.entity.Tag;
import com.codestates.preproject.tag.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {

    private TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    // 태그 생성
    public Tag createTag(TagDto.TagPost dto) {

        Tag tag = tagRepository.findByName(dto.getName());

        if (tag == null) {
            tag = new Tag();
            tag.setName(dto.getName());
            tag.setContent(dto.getContent());

            tagRepository.save(tag);
        }

        return tag;

    }

    // 태그 1개 조회
    public Tag findTag(String name) {

        Tag tag = tagRepository.findByName(name);

        if (tag == null) {
        }

        return tag;

    }

    // 태그 전체 조회
    public List<Tag> findTags() {
        return tagRepository.findAll();
    }

    // 더미 사용
    public Tag createTag(Tag tag) {
        return tagRepository.save(tag);
    }


}
