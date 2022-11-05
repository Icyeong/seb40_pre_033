package com.codestates.preproject.reply.mapper;

import com.codestates.preproject.reply.dto.ReplyPatchDto;
import com.codestates.preproject.reply.dto.ReplyPostDto;
import com.codestates.preproject.reply.dto.ReplyResponseDto;
import com.codestates.preproject.reply.entity.Reply;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReplyMapper {

    Reply replyPostToReply(ReplyPostDto replyPostDto);

    Reply replyPatchToReply(long replyId ,ReplyPatchDto replyPatchDto);

    ReplyResponseDto replyToResponse(Reply createdReply);

    List<Reply> reliesToResponse(List<Reply> replies);

}
