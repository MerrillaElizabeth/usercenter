export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: '登录', path: '/user/login', component: './user/Login' },
      { name: '注册', path: '/user/register', component: './user/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      { path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage/index.tsx' },
      {
        path: '/admin/add-user',
        name: '新增用户',
        component: './Admin/AddUser',
      },
      { component: './404' },
    ],
  },
  //{ name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { name: '用户信息', icon: 'user', path: '/user-info', component: './UserInfo' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
