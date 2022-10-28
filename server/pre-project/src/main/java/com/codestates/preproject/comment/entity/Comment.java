package com.codestates.preproject.comment.entity;

import com.codestates.preproject.article.Article;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Comment /*생성날짜, 수정날짜 상속 필요*/ {

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

    public Comment(String username, String content) {
        this.username = username;
        this.content = content;
    }

    //TODO  PV와 NV는 추후 추가예정

    // TODO 대댓은 시간이 가능하다면 추가 예정
}