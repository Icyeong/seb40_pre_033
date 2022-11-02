package com.codestates.preproject.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "유저 정보를 찾을 수 없습니다."),
    USER_EXISTS(409, "유저가 이미 존재합니다."),
    ARTICLE_NOT_FOUND(404, "게시글이 존재하지 않습니다."),
    COMMENT_EXIST(409, "존재하는 답변입니다."),
    COMMENT_NOT_FOUND(404, "답변을 찾을 수 없습니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
