package com.codestates.preproject.article;

import lombok.*;

import javax.persistence.*;


@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Article {
    // merge 이후 extends BaseTime 추가
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)//기본키 자동생성 목적
    @Column(name="article_id")
    private Long articleId;

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String contents;

    //추후 추가 예정
    /*@ManyToOne @JoinColumn(name = "user_id")
    private User writer;
    */

}
