package com.codestates.preproject.reply.mapper;

import com.codestates.preproject.reply.dto.ReplyPatchDto;
import com.codestates.preproject.reply.dto.ReplyPostDto;
import com.codestates.preproject.reply.dto.ReplyResponseDto;
import com.codestates.preproject.reply.entity.Reply;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReplyMapper {

    Reply replyPostToReply(ReplyPostDto replyPostDto);

    Reply replyPatchToReply(ReplyPatchDto replyPatchDto);

    ReplyResponseDto replyToResponse(Reply createdReply);

}
