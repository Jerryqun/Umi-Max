import { defineConfig } from '@umijs/max';
const { API_ENV } = process.env;

const name = 'main';

// 子应用-运营平台基础业务领域
const entryDeopCmdURL = () => {
  switch (API_ENV) {
    case 'local':
      return '//localhost:8002/remote.js';
    default:
      return '/deopCmd-fe/remote.js';
  }
};

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  'react-dom': {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max-main',
  },
  mf: {
    // 主应用
    name,
    remotes: [
      {
        name: 'deopCmd',
        entry: '//localhost:8001/remote.js',
      },
    ],
    // 配置 MF 共享的模块
    shared,
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '子应用菜单',
      path: '/deopCmd/demo',
      component: '@/pages/deopCmd',
    },
    {
      path: '/deopCmd/*',
      component: '@/pages/deopCmd',
    },
  ],
  npmClient: 'pnpm',
});
