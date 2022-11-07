package com.codestates.preproject.tag.entity;

import com.codestates.preproject.article_tag.ArticleTag;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "TAG")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    Long tagId;

    @Column(name = "NAME")
    String name;

    @Column(name = "CONTENT")
    String content;

    @OneToMany(mappedBy = "tag")
    List<ArticleTag> articleTags = new ArrayList<>();

    public void addArticleTag(ArticleTag tag) {
        this.articleTags.add(tag);
    }

    @Builder
    public Tag(Long tagId, String content) {
        this.tagId = tagId;
        this.content = content;
    }

}
