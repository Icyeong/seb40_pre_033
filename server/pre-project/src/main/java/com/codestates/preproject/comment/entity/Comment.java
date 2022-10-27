package com.codestates.preproject.comment.entity;

import com.codestates.preproject.article.Article;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Comment {

    @Id
    @Column(name = "comment_id")
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "article_id")
    private Article articleId;

    @Column(name = "user_name")
    @NotNull
    private String username;

    @Column(name = "comment_content")
    @NotNull
    private String content;

    //TODO  PV와 NV는 추후 추가예정

    // TODO 대댓은 시간이 가능하다면 추가 예정
}