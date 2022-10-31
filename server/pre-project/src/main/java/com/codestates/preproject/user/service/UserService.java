/*package com.codestates.preproject.user.service;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.user.dto.UserPostDto;
import com.codestates.preproject.user.dto.UserResponseDto;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import com.codestates.preproject.utils.CustomAuthorityUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public UserResponseDto createUser(UserPostDto request) {
        // user email이 이미 존재하는지 검사
        Optional<User> user = userRepository.findByEmail(request.getEmail());
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);



        User newUser = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .nickname(request.getNickname())
                .roles(authorityUtils.createRoles(request.getEmail()))
                .build();

        User createdUser = userRepository.save(newUser);

        return UserResponseDto.of(createdUser);
    }

    private List<GrantedAuthority> createAuthorities(String... roles) {
        return Arrays.stream(roles)
                .map(role -> new SimpleGrantedAuthority(role))
                .collect(Collectors.toList());
    }
}*/
