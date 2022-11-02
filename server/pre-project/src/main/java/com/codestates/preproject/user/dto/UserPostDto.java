package com.codestates.preproject.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserPostDto {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    private String nickname;
}
