package com.codestates.preproject.comment.service;

import com.codestates.preproject.article.Article;
import com.codestates.preproject.article.ArticleRepository;
import com.codestates.preproject.comment.entity.Comment;
import com.codestates.preproject.comment.repository.CommentRepository;
import com.codestates.preproject.exception.BusinessLogicException;
import com.codestates.preproject.exception.ExceptionCode;
import com.codestates.preproject.user.entity.User;
import com.codestates.preproject.user.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;

    public CommentService(UserRepository userRepository, CommentRepository commentRepository, ArticleRepository articleRepository) {

        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
        this.articleRepository = articleRepository;
    }

    // 답변 1개 조회
//    @Transactional(readOnly = true)
    public Comment findComment(long commentId) {
        return commentRepository.findByCommentId(commentId);
    }

    // 답변 전체 조회
    public Page<Comment> findComments(Long articleId, int page, int size) {

        return commentRepository.findAllByArticleId(articleId, PageRequest.of(page, size));
    }

    // 답변 생성
    @Transactional
    public Comment createComment(Comment comment, String email, Long articleId) {

        Optional<User> optionalUser = userRepository.findByEmail(email);
        User findUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        /*에러가 뜨면 에러 던지고 아닌 경우 받아옴*/

        comment.setUser(findUser);
        comment.setEmail(email);
        Optional<Article> optionalArticle = articleRepository.findById(articleId);
        Article findArticle = optionalArticle.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ARTICLE_NOT_FOUND));
        comment.setArticleId(articleId);
        comment.setArticle(findArticle);

        return commentRepository.save(comment);
    }

    // 답변 수정
    @Transactional
    public Comment updateComment(Comment comment) {

        Comment findComment = findVerifiedComment(comment.getCommentId());

        Optional.ofNullable(comment.getContent())
                .ifPresent(content -> findComment.setContent(content));

        return commentRepository.save(findComment);
    }

    // 답변 삭제
    @Transactional
    public void deleteComment(long commentId) {

        Comment findComment = commentRepository.findByCommentId(commentId);

        commentRepository.deleteById(commentId);
    }

    // 투표
    public Comment voteComment(long commentId, int vote) {

        Comment findComment = findVerifiedComment(commentId);

        findComment.setVote(vote);

        Comment updatedComment = commentRepository.save(findComment);

        return updatedComment;
    }

    // 작성자 확인
    private void verifiedWriter(Long userId, long commentId) {

        Comment comment = findComment(commentId);

        Long writerId = comment.getUser().getUserId();
        if (!writerId.equals(userId)) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_FORBIDDEN);
        }
    }

    // 답변 조회 실패
    public Comment findVerifiedComment(long commentId){

        Optional<Comment> optionalComment = commentRepository.findById(commentId);

        Comment findComment = optionalComment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findComment;
    }

    // 답변 이미 존재
    public ExceptionCode exceptionCode = ExceptionCode.COMMENT_EXIST;

    // 더미 사용
    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

}
