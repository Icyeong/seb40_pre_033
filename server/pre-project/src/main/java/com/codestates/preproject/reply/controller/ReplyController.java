package com.codestates.preproject.reply.controller;


import com.codestates.preproject.reply.entity.Reply;
import com.codestates.preproject.reply.mapper.ReplyMapper;
import com.codestates.preproject.reply.service.ReplyService;
import com.codestates.preproject.response.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/reply")
@Slf4j
public class ReplyController {

    private final ReplyService replyService;
    private final ReplyMapper replyMapper;

    public ReplyController(ReplyService replyService, ReplyMapper replyMapper) {
        this.replyService = replyService;
        this.replyMapper = replyMapper;
    }

     // 대댓 한명 조회
    @GetMapping("/{reply-id}")
    public ResponseEntity getNestedComment(
            @PathVariable("reply-id") @Positive long replyId) {

        Reply reply = replyService.findReply(replyId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(replyMapper.replyToResponse(reply)),
                HttpStatus.OK
        );
    }

    // 대댓 전체 조회

    // 대댓 생성

    // 대댓 수정

    // 대댓 삭제

    // 더미 데이터

}
