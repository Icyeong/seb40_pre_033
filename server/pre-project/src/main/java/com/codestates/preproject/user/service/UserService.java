package com.codestates.preproject.user.service;

import com.codestates.preproject.user.dto.UserPostDto;
import com.codestates.preproject.user.dto.UserResponseDto;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {

    public UserResponseDto createUser(UserPostDto request) {
        User newUser = User.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .nickname(request.getNickname())
                .build();

//        User createdUser = userRepository.save(newUser);

        return UserResponseDto.of(newUser);
    }
}
