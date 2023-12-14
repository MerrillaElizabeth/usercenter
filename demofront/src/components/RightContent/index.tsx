import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';
import { useModel } from 'umi';
import HeaderSearch from '../HeaderSearch';
import Avatar from './AvatarDropdown';
import styles from './index.less';
export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  if (!initialState || !initialState.settings) {
    return null;
  }
  const { navTheme, layout } = initialState.settings;
  let className = styles.right;
  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="BiliBili"
        options={[
          {
            label: <a href="https://www.bilibili.com/">BliBili</a>,
            value: 'BliBili',
          },
          {
            label: <a href="https://www.bilibili.com/">BliBili</a>,
            value: 'BliBili',
          },
        ]}
        onSearch={value => {
          console.log('input', value);
        }}
      />
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://space.bilibili.com/1427029765');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
