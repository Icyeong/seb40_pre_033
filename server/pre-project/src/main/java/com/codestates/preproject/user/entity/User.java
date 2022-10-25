package com.codestates.preproject.user.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Auditable;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.security.Principal;

@NoArgsConstructor
@Getter
@Setter
public class User {
    private long userId;
    private String email;
    private String password;
    private String nickname;

    @Builder
    public User(String email, String password, String nickname) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
    }
}
