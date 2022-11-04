package com.codestates.preproject.comment.mapper;

import com.codestates.preproject.comment.dto.CommentPatchDto;
import com.codestates.preproject.comment.dto.CommentPostDto;
import com.codestates.preproject.comment.dto.CommentResponseDto;
import com.codestates.preproject.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

// 빌더

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment commentPostToComment(CommentPostDto commentPostDto);

    Comment commentPatchToComment(long commentId, CommentPatchDto commentPatchDto);

    CommentResponseDto commentToCommentResponse(Comment comment);

    List<CommentResponseDto> commentsToCommentResponse (List<Comment> comments);
}
