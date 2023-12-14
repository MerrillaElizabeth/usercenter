package com.example.demo.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.model.domain.User;
import com.example.demo.model.domain.request.UserSearchRequest;
import com.example.demo.model.domain.request.UserUpdatePasswordRequest;
import jakarta.servlet.http.HttpServletRequest;

/**
* @author No'r'n
* @description 针对表【user(用户)】的数据库操作Service
* @createDate 2023-11-18 14:52:56
*/
public interface UserService extends IService<User> {
    /**
     * 用户注册
     *
     * @param userAccount   用户账户
     * @param userPassword  用户密码
     * @param checkPassword 校验密码
     * @return 新用户 id
     */
    long userRegister(String userAccount, String userPassword, String checkPassword);



    long userAdd(String username, String userAccount, String userPassword, Integer gender, Integer userRole, String phone, String email);

    /**
     * 用户登录
     *
     * @param userAccount  用户账户
     * @param userPassword 用户密码
     * @param request
     * @return 脱敏后的用户信息
     */
    User userLogin(String userAccount, String userPassword, HttpServletRequest request);





    /**
     * 分页条件
     * @param searchRequest
     * @return
     */
    QueryWrapper<User> getQueryWrapper(UserSearchRequest searchRequest);

    User getSafetyUser(User originUser);

    /**
     * 用户注销
     * @param request
     * @return
     */
    int userLogout(HttpServletRequest request);

    /**
     * 获取当前登录用户
     *
     * @param request
     * @return
     */
    User getLoginUser(HttpServletRequest request);

    /**
     * 修改密码
     *
     * @param updatePasswordRequest
     * @param request
     */
    boolean updateUserPassword(UserUpdatePasswordRequest updatePasswordRequest, HttpServletRequest request);

}
