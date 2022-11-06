package com.codestates.preproject.tag.entity;

import com.codestates.preproject.article_tag.ArticleTag;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "TAG")
@Getter
@Setter
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

}
