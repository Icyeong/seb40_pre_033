package com.codestates.preproject.article;

import com.codestates.preproject.article_tag.ArticleTag;
import com.codestates.preproject.audit.BaseTime;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Table(name = "ARTICLE")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
@Entity
public class Article extends BaseTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private Long articleId;

    @Column(insertable = true, nullable = false)
    private String title;

    @Lob
    @Column(insertable = true, nullable = false)
    private String content;

    @Column
    private String email;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;


    @OneToMany(mappedBy = "article")
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public Article(Long articleId, String title, String content) {
        this.articleId = articleId;
        this.title = title;
        this.content = content;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    @OneToMany(mappedBy = "article")
    @JsonIgnore
    List<ArticleTag> articleTags = new ArrayList<>();

    public void addArticleTag(ArticleTag tag) {
        this.articleTags.add(tag);
    }
}
