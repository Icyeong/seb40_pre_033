package com.codestates.preproject.article_tag;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class ArticleTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ARTICLE_TAG_ID")
    Long articleTag;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    Tag tag;

    @ManyToOne
    @JoinColumn(name = "ARTICLE_ID")
    Article article;

}
