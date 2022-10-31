package com.codestates.preproject.comment.entity;

import com.codestates.preproject.article.Article;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Comment {

    @Id
    @Column(name = "comment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article articleId;

    @Column(name = "user_name")
    private String username;

    @Column(name = "comment_content")
    private String content;

}