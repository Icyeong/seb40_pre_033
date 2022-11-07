package com.codestates.preproject.tag.entity;

import com.codestates.preproject.article.Article;
import lombok.*;

import javax.persistence.*;

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

    @Column(name = "name")
    String name;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "article")
    private Article article;

    public void addArticle(Article article) {
        article.addTag(this);
        this.article = article;
    }

    @Column(name = "article_id")
    private Long articleId;

    @Builder
    public Tag(Long tagId, String content) {
        this.tagId = tagId;
        this.content = content;
    }

}
