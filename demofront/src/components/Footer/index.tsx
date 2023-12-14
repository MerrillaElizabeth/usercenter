import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {AUTHOE_Bilibili} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '用户管理系统';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'User_center',
          title: '用户中心',
          href: AUTHOE_Bilibili,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/MerrillaElizabeth',
          blankTarget: true,
        },
        {
          key: 'Bilibili',
          title: 'B站',
          href: AUTHOE_Bilibili,
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
