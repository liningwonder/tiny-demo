# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



### vue router
npm install vue-router@4


import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue';

import Registry from '@/views/Registry.vue';

import HomeR from '@/views/Registry.vue';


// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/registry', component: Registry },
  { path: '/test', component: HomeR }
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



解决js不支持import检查问题 首选项-设置-setting.json
"javascript.validate.enable":false

vite.config.js 添加解决Component provided template option but runtime compilation is not supported in this build of Vue
'vue': 'vue/dist/vue.esm-bundler.js'


### less   https://lesscss.cn/

npm install less --save-dev

npm i less --save-dev

npm install less -D


Less.js 是将 Less 样式转换为 CSS 样式的 JavaScript 工具

变量 
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}

混入
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}

嵌套
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}

#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}


.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}


###  nprogress  http://ricostacruz.com/nprogress  https://github.com/rstacruz/nprogress

npm install nprogress

###  vue-i18n

https://vue-i18n.intlify.dev/

https://vue-i18n.intlify.dev/guide/introduction.html

npm install vue-i18n@9

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import en from './locale/en-US.js';
import cn from './locale/zh-CN';
import { createI18n } from 'vue-i18n';


const messages =  {
    en,
    cn
};

const i18n = createI18n({
    legacy: false,
    messages,
    locale: 'cn'
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');


    const LOCALE_OPTIONS = [
      { label: '中文', value: 'cn' },
      { label: 'English', value: 'en' },
    ];
    const locales = [...LOCALE_OPTIONS];

    const { locale } = useI18n();

    const changeLan = () => {
      lan.value = !lan.value;
    };
  
    // 切换语言
    const changeLocale = (lang) => {
      console.log(lang);
      locale.value = lang;
      console.log(lang);
    };    

https://blog.csdn.net/forever__fish/article/details/134335402