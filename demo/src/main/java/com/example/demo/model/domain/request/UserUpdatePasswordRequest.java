package com.example.demo.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * @author No'r'n
 * CreateTime 2023/5/11 12:24
 */
@Data
public class UserUpdatePasswordRequest implements Serializable {

    private static final long serialVersionUID = -3721285658227086484L;

    /**
     * 原密码
     */
    private String userPassword;

    /**
     * 新密码
     */
    private String newPassword;
}
