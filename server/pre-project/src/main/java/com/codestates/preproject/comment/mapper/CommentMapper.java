package com.codestates.preproject.comment.mapper;

import com.codestates.preproject.comment.dto.CommentPostDto;
import com.codestates.preproject.comment.dto.CommentResponseDto;
import com.codestates.preproject.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    Comment commentPostToComment(CommentPostDto commentPostDto);

    CommentResponseDto commentToCommentResponse(Comment comment);

    List<CommentResponseDto> CommentsToCommentResponseDtos(List<Comment> comments);

    // TODO 답변 수정 매퍼 추가 필요
}
