import { LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { ProFormSelect } from '@ant-design/pro-form';
import { message, Tabs } from 'antd';
import { create } from '@/services/ant-design-pro/api';
import { SYSTEM_LOGO } from '@/constants';
import {  selectGender, selectUserRole } from '@/constants';

export default () => {
  const handleCreate = async (values: API.CreateParams) => {
    try {
      // 创建用户
      const suc = await create(values);
      if (suc) {
        const defaultLoginSuccessMessage = '创建成功！';
        message.success(defaultLoginSuccessMessage);
        location.reload();
        return;
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div style={{ backgroundColor: 'white' }}>
      <LoginForm
        submitter={{
          searchConfig: {
            submitText: '新增用户',
          },
        }}
        logo={SYSTEM_LOGO}
        title="用户中心"
        subTitle="用户管理平台"
        onFinish={async (values) => {
          await handleCreate(values as API.CreateParams);
        }}
      >
        <Tabs centered activeKey={'account'}>
          <Tabs.TabPane key={'account'} tab={'新增用户信息填写'} />
        </Tabs>
        {
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder="用户名"
              rules={[
                {
                  pattern: /^[^~!@#$%^&*()+=|{}':;',\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]+$/,
                  message: '不能包含特殊字符',
                },
              ]}

              // rules={[
              //   {
              //     required: true,
              //     message: '用户名不能为空!',
              //   },
              // ]}
            />
            <ProFormText
              name="userAccount"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder="用户账户 "
              rules={[
                {
                  required: true,
                  message: '用户账户不能为空!',
                },
                {
                  min: 4,
                  message: '用户账户长度不小于4位',
                },
                {
                  pattern: /^[^~!@#$%^&*()+=|{}':;',\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]+$/,
                  message: '不能包含特殊字符',
                },
              ]}
            />
            <ProFormText.Password
              name="userPassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
                {
                  min: 8,
                  message: '密码长度不得小于8',
                },
                {
                  pattern: /^[^~!@#$%^&*()+=|{}':;',\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]+$/,
                  message: '不能包含特殊字符',
                },
              ]}
            />
            <ProFormText
              name="phone"
              fieldProps={{
                size: 'large',
                prefix: <PhoneOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户手机号 '}
              rules={[
                {
                  len: 11,
                  message: '手机号长度为11',
                },
                {
                  pattern: /^\d+$/,
                  message: '只能输入数字',
                },
              ]}
            />
            <ProFormText
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <MailOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户邮箱 '}
              rules={[
                {
                  pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: '请输入有效的邮箱地址',
                },
              ]}
            />
            <ProFormSelect
              name="gender"
              fieldProps={{
                size: 'large',
              }}
              label="性别"
              options={selectGender}
              placeholder="请选择性别"
              rules={[
                {
                  required: true,
                  message: '请选择性别',
                },
              ]}
            />
            <ProFormSelect
              name="userRole"
              fieldProps={{
                size: 'large',
              }}
              label="用户角色"
              options={selectUserRole}
              placeholder={'选择用户角色'}
              rules={[
                {
                  required: true,
                  message: '请选择用户角色',
                },
              ]}
            />
          </>
        }
        <div
          style={{
            marginBlockEnd: 24,
          }}
        />
      </LoginForm>
    </div>
  );
};
