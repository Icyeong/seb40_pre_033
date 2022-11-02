package com.codestates.preproject.user.controller;

import com.codestates.preproject.article.ArticleMapper;
import com.codestates.preproject.article.ArticleResponse;
import com.codestates.preproject.comment.dto.CommentResponseDto;
import com.codestates.preproject.security.userDetails.PrincipalDetailsService;
import com.codestates.preproject.user.dto.UserPostDto;
import com.codestates.preproject.user.dto.UserResponseDto;
import com.codestates.preproject.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
    public ResponseEntity<UserResponseDto> signUp(@Valid @RequestBody UserPostDto request) {
        return new ResponseEntity<>(userService.createUser(request), HttpStatus.CREATED);
    }

    @GetMapping("/user/{user-id}")
    public ResponseEntity<UserResponseDto> getUser(@Positive @PathVariable("user-id") long userId) {
        return new ResponseEntity<>(userService.findUser(userId), HttpStatus.OK);
    }

    @GetMapping("/user/me/articles")
    public ResponseEntity<List<ArticleResponse>> getMyArticles() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(userService.getMyArticles(email), HttpStatus.OK);
    }

    @GetMapping("/user/me/comments")
    public ResponseEntity<List<CommentResponseDto>> getMyComments() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(userService.getMyComments(email), HttpStatus.OK);
    }


    @GetMapping("/user/me")
    public ResponseEntity<UserResponseDto> getMe() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return new ResponseEntity<>(userService.getMe(email), HttpStatus.OK);
    }
}
