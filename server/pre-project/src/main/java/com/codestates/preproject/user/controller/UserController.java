package com.codestates.preproject.user.controller;

import com.codestates.preproject.response.SingleResponseDto;
import com.codestates.preproject.user.dto.UserPostDto;
import com.codestates.preproject.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@Slf4j
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/auth/signup")
    public ResponseEntity<SingleResponseDto> signUp(@Valid @RequestBody UserPostDto request) {
        return new ResponseEntity<>(new SingleResponseDto<>(userService.createUser(request)), HttpStatus.CREATED);
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
