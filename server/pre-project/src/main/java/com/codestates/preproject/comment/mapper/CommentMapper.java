package com.codestates.preproject.comment.mapper;

import com.codestates.preproject.comment.dto.CommentDto;
import com.codestates.preproject.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface CommentMapper {

    CommentDto.Response commentToCommentResponse(Comment comment);

    List<CommentDto.Response> commentToCommentResponses(List<Comment> comment);

    Comment commentPostToComment(CommentDto.Post requestBody);


    // TODO 답변 수정 매퍼 추가 필요
}
