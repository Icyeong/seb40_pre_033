package com.codestates.preproject.comment.entity;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.audit.BaseTime;
import com.codestates.preproject.reply.entity.Reply;
import com.codestates.preproject.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "COMMENT")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "COMMENT")
public class Comment extends BaseTime {

    // 답변
    @Id
    @Column(name = "comment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @Column(name = "email")
    private String email;
    // commentWriter

    @Column(name = "comment_content", nullable = false, columnDefinition = "TEXT")
    private String content;

    // 유저
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public void addUser(User user) {
        this.user = user;
    }

    // 게시글
    // 아티클 아이디 한 개로
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "article")
    private Article article;

    public void addArticle(Article article) {
        article.addComment(this);
        this.article = article;
    }

    @Column(name = "article_id")
    private Long articleId;

    // 투표
    @Column(nullable = false)
    private int vote;

    // 대댓
    @OneToMany(mappedBy = "comment", cascade = CascadeType.PERSIST)
    private List<Reply> replies = new ArrayList<>();

    @Builder
    public Comment(long commentId, String content) {
        this.commentId = commentId;
        this.content = content;
    }

}