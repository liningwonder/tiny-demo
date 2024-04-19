import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue';
import Registry from '@/views/Registry.vue';
import HomeR from '@/views/Registry.vue';
import OkLogin from '@/views/login/index.vue'
import NotFound from '@/views/not-found/index.vue'
import Page403 from '@/views/exception/403/index.vue'
import Page404 from '@/views/exception/404/index.vue'
import Page500 from '@/views/exception/500/index.vue'
import LoginRegister from '@/views/login/components/LoginRegister.vue'
import Breadcrumb from '@/components/breadcrumb/index.vue'
import Menu from '@/components/menu/index.vue'
import Navbar from '@/components/navbar/index.vue'
import PageSuccess from '@/views/result/success/index.vue'
import PageError from '@/views/result/error/index.vue'
import Layout from '@/layout/default-layout.vue'


// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: OkLogin },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: LoginRegister },
  { path: '/test', component: HomeR },
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/menu', component: Menu },
  { path: '/navbar', component: Navbar },
  { path: '/notfound', component: NotFound },
  { path: '/403', component: Page403 },
  { path: '/404', component: Page404 },
  { path: '/500', component: Page500 },
  { path: '/error', component: PageError },
  { path: '/success', component: PageSuccess },
  { path: '/layout', component: Layout }
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。  createWebHistory
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;

// 5. 创建并挂载根实例
//const app = Vue.createApp({})
// 确保 _use_ 路由实例使
// 整个应用支持路由。
//app.use(router)

//app.mount('#app')

// 现在，应用已经启动了！