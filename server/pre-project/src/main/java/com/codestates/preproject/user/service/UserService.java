package com.codestates.preproject.user.service;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.article.ArticleRepository;
import com.codestates.preproject.article.ArticleResponse;
import com.codestates.preproject.comment.dto.CommentResponseDto;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.repository.CommentRepository;
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
    private final ArticleRepository articleRepository;
    private final CommentRepository commentRepository;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils, ArticleRepository articleRepository, CommentRepository commentRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.articleRepository = articleRepository;
        this.commentRepository = commentRepository;
    }

    public UserResponseDto createUser(UserPostDto request) {
        // user email이 이미 존재하는지 검사
        Optional<User> user = userRepository.findByEmail(request.getEmail());
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);



        User newUser = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(authorityUtils.createRoles(request.getEmail()))
                .build();

        if (request.getNickname() != null) {
            newUser.setNickname(request.getNickname());
        } else {
            newUser.setNickname("User" + userRepository.count());
        }

        User createdUser = userRepository.save(newUser);

        return UserResponseDto.of(createdUser);
    }

    @Transactional(readOnly = true)
    public UserResponseDto findUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);

        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return UserResponseDto.of(findUser);
    }

    @Transactional(readOnly = true)
    public List<ArticleResponse> getMyArticles(String email) {
        User findUser = userRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        List<Article> articles = articleRepository.findAllByUser_userId(findUser.getUserId());

        return articles.stream()
                .map(article -> ArticleResponse.builder()
                        .articleId(article.getArticleId())
                        .title(article.getTitle())
                        .contents(article.getContents())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<CommentResponseDto> getMyComments(String email) {
        User findUser = userRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        List<Comment> comments = commentRepository.findAllByUser_userId(findUser.getUserId());

        return comments.stream()
                .map(comment -> CommentResponseDto.builder()
                        .commentId(comment.getCommentId())
                        .username(comment.getUsername())
                        .content(comment.getContent())
                        .build())
                .collect(Collectors.toList());
    }

    public UserResponseDto getMe(String username) {
        User findUser = userRepository.findByEmail(username).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return UserResponseDto.of(findUser);
    }

    private List<GrantedAuthority> createAuthorities(String... roles) {
        return Arrays.stream(roles)
                .map(role -> new SimpleGrantedAuthority(role))
                .collect(Collectors.toList());
    }

    public User findVerifiedUser(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);

        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }
}
