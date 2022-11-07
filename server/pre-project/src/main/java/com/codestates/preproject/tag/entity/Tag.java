package com.codestates.preproject.tag.entity;

import com.codestates.preproject.articleTag.ArticleTag;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "TAG")
@Getter
@Setter
//@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    Long tagId;

    @Column(name = "name")
    String name;

    @Column(name = "content", nullable = true, columnDefinition = "TEXT")
    String content;

    @OneToMany(mappedBy = "tag")
    private List<ArticleTag> articleTag = new ArrayList<>();

    @Builder
    public Tag(String name ) {
        this.name = name;
    }

}
