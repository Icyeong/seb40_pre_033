package com.codestates.preproject.article;

import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Table(name = "ARTICLE")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Article {
    // merge 이후 extends BaseTime 추가
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)//기본키 자동생성 목적
    @Column(name="article_id")
    private Long articleId;

    @Column(insertable = true, nullable= false)
    private String title;

    @Lob
    @Column(insertable = true, nullable= false)
    private String contents;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "article")
    private List<Comment> comments = new ArrayList<>();

    @Builder
    public Article(Long articleId, String title, String contents) {
        this.articleId = articleId;
        this.title = title;
        this.contents = contents;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }


}
