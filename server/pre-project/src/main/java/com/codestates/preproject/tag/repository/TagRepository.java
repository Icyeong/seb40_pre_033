package com.codestates.preproject.tag.repository;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.tag.entity.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {

    Tag findByTagId(Long tagId);

//    Page<Tag> findAllByArticleId(Pageable pageable);


}
