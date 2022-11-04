package com.codestates.preproject.reply.entity;

import com.codestates.preproject.audit.BaseTime;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Entity(name = "REPLY")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "REPLY")
public class Reply extends BaseTime {

    // 리댓
    @Id
    @Column(name = "reply_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long replyId;

    @Column(name = "email")
    private String email;

    @Column(name = "replyContent", nullable = false, columnDefinition = "TEXT")
    private String replyContent;

    // 유저
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public void addUser(User user) {
        this.user = user;
    }

    // 답변
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Comment comment;

    public void addComment(Comment comment) {
        this.comment = comment;
    }

    @Column(name = "comment_id")
    private long commentId;

    @Builder
    public Reply(long replyId, String replyContent) {
        this.replyId = replyId;
        this.replyContent = replyContent;
    }

}
