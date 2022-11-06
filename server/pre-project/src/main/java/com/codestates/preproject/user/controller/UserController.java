package com.codestates.preproject.user.controller;

import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.response.SingleResponseDto;
import com.codestates.preproject.security.userDetails.PrincipalDetailsService;
import com.codestates.preproject.user.dto.UserPostDto;
import com.codestates.preproject.user.dto.UserResponseDto;
import com.codestates.preproject.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Map;

@RestController
@Validated
@Slf4j
public class UserController {
    private final UserService userService;
    private final PrincipalDetailsService principalDetailsService;

    public UserController(UserService userService, PrincipalDetailsService principalDetailsService) {
        this.userService = userService;
        this.principalDetailsService = principalDetailsService;
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<SingleResponseDto> signUp(@Valid @RequestBody UserPostDto request) {
        UserResponseDto userResponseDto = userService.createUser(request);
        if (userResponseDto == null) {
            return new ResponseEntity<>(HttpStatus.SEE_OTHER);
        }
        return new ResponseEntity<>(new SingleResponseDto<>(userResponseDto), HttpStatus.CREATED);
    }

    @GetMapping("/auth/refresh")
    public ResponseEntity<SingleResponseDto> refresh(HttpServletRequest request, HttpServletResponse response) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        String refreshToken = request.getHeader("Refresh");

        Map<String, String> tokens = principalDetailsService.refresh(refreshToken);
        response.setHeader(HttpHeaders.AUTHORIZATION, tokens.get("Authorization"));
        response.setHeader("Refresh", tokens.get("Refresh"));

        return new ResponseEntity<>(new SingleResponseDto<Map<String, String>>(tokens), HttpStatus.OK);
    }

    @GetMapping("/user/{user-id}")
    public ResponseEntity<SingleResponseDto> getUser(@Positive @PathVariable("user-id") long userId) {
        return new ResponseEntity<>(new SingleResponseDto(userService.findUser(userId)), HttpStatus.OK);
    }

    @GetMapping("/user/me/articles")
    public ResponseEntity<SingleResponseDto> getMyArticles() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(new SingleResponseDto<>(userService.getMyArticles(email)), HttpStatus.OK);
    }

    @GetMapping("/user/me/comments")
    public ResponseEntity<SingleResponseDto> getMyComments() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(new SingleResponseDto(userService.getMyComments(email)), HttpStatus.OK);
    }


    @GetMapping("/user/me")
    public ResponseEntity<SingleResponseDto> getMe() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(new SingleResponseDto(userService.getMe(email)), HttpStatus.OK);
    }
}
