package com.codestates.preproject.article;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//기본키 자동생성 목적
    Long articleId;
    @Column
    String title;
    @Column
    String contents;
    //int vote;
}
