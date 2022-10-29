package com.codestates.preproject.article;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    // merge 이후 extends BaseTime 추가
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//기본키 자동생성 목적
    Long articleId;
    @Column(length=200)
    String title;
    @Lob
    String contents;

}
