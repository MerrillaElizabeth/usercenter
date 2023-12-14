-- auto-generated definition
create table user
(
    id           bigint auto_increment comment 'id'
        primary key,
    username     varchar(20)                        null comment '用户昵称',
    userAccount  varchar(11)                        null comment '用户账号',
    avatarUrl    varchar(1024)                      null comment '用户头像',
    gender       tinyint                            null comment '性别',
    userPassword varchar(512)                       not null comment '密码',
    phone        varchar(128)                       null comment '电话',
    email        varchar(512)                       null comment '邮箱',
    userStatus   int      default 0                 not null comment '用户状态
状态 -0 正常',
    createTime   datetime default CURRENT_TIMESTAMP null comment '创建时间',
    updatetime   datetime default CURRENT_TIMESTAMP null comment '更新时间',
    isDelete     tinyint  default 0                 not null comment '是否删除',
    userRole     int      default 0                 not null comment '用户类型 -0 普通用户 -1管理员',
    constraint user_id_uindex
        unique (id)
)
    comment '用户';

