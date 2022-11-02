package com.codestates.preproject.comment.entity;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.audit.BaseTime;
import com.codestates.preproject.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Entity(name = "COMMENTS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "COMMENTS")
public class Comment extends BaseTime {

    // 답변
    @Id
    @Column(name = "comment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    @Column(name = "user_name")
    private String username;

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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "article_id")
    private Article article;

    public void addArticle(Article article) {
        this.article = article;
    }

    @Builder
    public Comment(String username, String content) {
        this.username = username;
        this.content = content;
    }

//    // 투표
//    @OneToOne
//    @JoinColumn(name = "Comment_like", nullable = false, columnDefinition = "INT")
//    private User positiveVote;
//
//    @OneToOne
//    @JoinColumn(name = "Comment_dislike", nullable = false, columnDefinition = "INT")
//    private User negativeVote;
//
}