package com.backend.backend.exception;

public class IssueNotFoundException extends RuntimeException {
    public IssueNotFoundException(Long id) {
    super("Could Not find the Issue with Id");

    }
}
