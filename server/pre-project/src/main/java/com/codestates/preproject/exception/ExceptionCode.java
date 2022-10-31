package com.codestates.preproject.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "유저 정보를 찾을 수 없습니다."),
    USER_EXISTS(409, "유저가 이미 존재합니다.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
