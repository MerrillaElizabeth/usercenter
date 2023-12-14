package com.example.demo.model.domain.request;

import lombok.Data;

import java.io.Serializable;

/**
 * 用户创建请求
 *
 */
@Data
public class UserAddRequest implements Serializable {

    /**
     * 用户昵称
     */
    private String username;

    /**
     * 账号
     */
    private String userAccount;

    /**
     * 密码
     */
    private String userPassword;

    private Integer gender;

    private String phone;

    private String email;
//    /**
//     * 用户头像
//     */
//    private String avatarUrl;

    /**
     * 用户角色: user, admin
     */
    private Integer userRole;

    private static final long serialVersionUID = 1L;
}