import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import en from './locale/en-US.js';
import cn from './locale/zh-CN.js';
import { createI18n } from 'vue-i18n';


// Step 1: 声明应用实例 
// Step 2: 应用实例挂载应用:应用实例必须在调用了 .mount() 方法后才会渲染出来。
//该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：
//应用根组件的内容将会被渲染在容器元素里面 
//还有其他写法 const app = createApp(App); app.mount('#app')
// 我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”
//createApp(App).mount('#app')


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






