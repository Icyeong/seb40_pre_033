package com.codestates.preproject.reply.controller;


import com.codestates.preproject.reply.dto.ReplyPatchDto;
import com.codestates.preproject.reply.dto.ReplyPostDto;
import com.codestates.preproject.reply.entity.Reply;
import com.codestates.preproject.reply.mapper.ReplyMapper;
import com.codestates.preproject.reply.service.ReplyService;
import com.codestates.preproject.response.SingleResponseDto;
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
    @GetMapping("/all")
    public ResponseEntity getReplies() {

        List<Reply> replies = replyService.findReplies();

        return new ResponseEntity<>(
                replyMapper.reliesToResponse(replies),
                HttpStatus.OK
        );
    }

    // 대댓 생성
    @PostMapping("/{comment-id}")
    public ResponseEntity postReply(@Valid @RequestBody ReplyPostDto replyPostDto,
                                    @PathVariable("comment-id") long commentId) {

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        replyPostDto.setUserEmail(email);
        replyPostDto.setCommentId(commentId);

        Reply reply = replyService.createReply(replyMapper.replyPostToReply(replyPostDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(replyMapper.replyToResponse(reply)),
                HttpStatus.CREATED);

    }

    // 대댓 수정
    @PatchMapping("/{reply-id}")
    public ResponseEntity patchReply(
            @PathVariable("reply-id") @Positive long replyId,
            @Valid @RequestBody ReplyPatchDto replyPatchDto) {

        replyPatchDto.setReplyId(replyId);

        Reply reply = replyMapper.replyPatchToReply(replyId, replyPatchDto);

        replyService.updateReply(reply);

        return new ResponseEntity<>(
                new SingleResponseDto<>(replyMapper.replyToResponse(reply)),
                HttpStatus.OK);
    }

    // 대댓 삭제
    @DeleteMapping("/{reply-id}")
    public ResponseEntity deleteReply(
            @PathVariable("reply-id") @Positive long replyId) {

        replyService.deleteReply(replyId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
