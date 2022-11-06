package com.codestates.preproject.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "유저 정보를 찾을 수 없습니다."),
    USER_EXISTS(409, "유저가 이미 존재합니다."),
    USER_LOGIN_POSSIBLE(303, "모든 정보가 일치하여 로그인 가능합니다."),
    NOT_LOGIN(403, "로그인이 되어있지 않습니다."),
    ARTICLE_NOT_FOUND(404, "게시글이 존재하지 않습니다."),
    COMMENT_EXIST(409, "존재하는 답변입니다."),
    COMMENT_NOT_FOUND(404, "답변을 찾을 수 없습니다."),
    REPLY_NOT_FOUND (404,"대댓글을 찾을 수 없습니다"),
    REPLY_EXIST(409, "존재하는 리댓글입니다"),
    ACCESS_FORBIDDEN(403, "접근 권한이 없습니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
