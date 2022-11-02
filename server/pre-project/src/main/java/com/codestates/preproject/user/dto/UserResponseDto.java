package com.codestates.preproject.user.dto;

import com.codestates.preproject.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDto {
    private Long userId;
    private String email;
    private String nickname;
    private User.UserStatus userStatus;

    public static UserResponseDto of(User user) {
        return new UserResponseDto(user.getUserId(), user.getEmail(), user.getNickname(), user.getUserStatus());
    }
}
