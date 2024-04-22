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


### ESLint

https://eslint.nodejs.cn/

ESLint 是一个开源项目，可帮助你查找和修复 JavaScript 代码中的问题。
无论你是在浏览器中还是在服务器上编写 JavaScript，无论是否使用框架，ESLint 都可以帮助你的代码发挥最大的作用。





创建项目
winpty npm.cmd create vue@latest


### vite config

// 用于处理和解析url的模块url
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
// you can use the defineConfig helper which should provide intellisense
import { defineConfig } from 'vite'

//vite 中使用vue
import vue from '@vitejs/plugin-vue'

//vite中使用vue jsx
import vueJsx from '@vitejs/plugin-vue-jsx'

//Vite plugin for running Vue DevTools
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools()],
  resolve: {
    alias: {
      /**
       * 在源码中就可以使用'@'符号指代src目录  ./指代当前目录
       * new URL(input[, base])
       * If input is relative, then base is required. If input is absolute, the base is ignored.
       * const myURL = new URL('/foo', 'https://example.org/');
       * 在 ES11 中，JavaScript 引入了 import.meta 对象，可以获取到当前模块的信息
       * import.meta 对象包含了以下属性：
       * import.meta.url：获取当前模块的 URL 地址。
       * import.meta.scriptElement：获取当前模块对应的 script 标签。
       * import.meta.env：获取环境变量。
       * fileURLToPath('file:///C:/path/');         // Correct:   C:\path\ (Windows)
       */
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


### 环境变量

1、在浏览器环境里使用环境变量


console.log('import', import.meta)
console.log('import.url', import.meta.env.BASE_URL)
console.log('import.env.MODE', import.meta.env.MODE)

import.meta.env.MODE: {string} 应用运行的模式。
import.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由base 配置项决定。
import.meta.env.PROD: {boolean} 应用是否运行在生产环境。
import.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与import.meta.env.PROD相反)。

2、在node环境里使用环境变量
需要我们设置 .env 文件
.env # 所有情况下都会加载
.env.local # 所有情况下都会加载，但会被 git 忽略
.env.[mode] # 只在指定模式下加载
.env.[mode].local # 只在指定模式下加载，但会被 git 忽略

然后在package 里面设置mode

  "scripts": {
    "dev": "vite",
    "build": "vite build --mode project",
    "lib": "vite build --mode lib",
    "libdts": "vue-tsc --declaration --emitDeclarationOnly ",
  },

build 命令后面的 --mode project 表示，需要使用 project 模式打包项目，对应的是 .env.project 文件。

lib 命令后面的 --mode lib 表示，需要使用 lib模式打包项目，对应的是 .env.lib 文件。

这样我们可以根据不同的命令，使用不同的模式，加载对应的.env文件，得到具体的环境变量。

3、vite 与环境变量

vite.config.js的默认配置

打包时（package.json）可以指定配置文件

vite --config my-config.js

vite使用环境变量 可以加载  process.env文件

Vite doesn't load .env files

但是可以手动使用loadEnv去加载

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})

公共配置：

root  默认  process.cwd()
base  默认 /
mode  默认 'development' for serve, 'production' for build


### pinia https://pinia.vuejs.org/zh/introduction.html

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。

npm install pinia

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')


Store 它有三个概念，state、getter 和 action，我们可以假设这些概念相当于组件中的 data、 computed 和 methods 

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


###  axios  https://axios-http.com/

$ npm install axios



export interface LoginData {
  username: string;
  password: string;
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/user/login', data);
}












import axios from 'axios';

// 向给定ID的用户发起请求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });

// 上述请求也可以按以下方式完成（可选）
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // 总是会执行
  });  

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

//POST
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


//发起多个并发请求
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

// OR

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function ([acct, perm]) {
    // ...
  });


const {data} = await axios.post('/user', document.querySelector('#my-form'), {
  headers: {
    'Content-Type': 'application/json'
  }
})

const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3],
    photo: document.querySelector('#fileInput').files
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
)

const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3]
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})



可以向 axios 传递相关配置来创建请求

// 发起一个post请求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});



创建一个实例
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


// 创建实例时配置默认值
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 创建实例后修改默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;



// 使用库提供的默认配置创建实例
// 此时超时配置的默认值是 `0`
const instance = axios.create();

// 重写库的超时默认值
// 现在，所有使用此实例的请求都将等待2.5秒，然后才会超时
instance.defaults.timeout = 2500;

// 重写此请求的超时时间，因为该请求需要很长时间
instance.get('/longRequest', {
  timeout: 5000
});



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });










{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认值

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 你可以修改请求头。
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对接收的 data 进行任意转换处理

    return data;
  }],

  // 自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是与请求一起发送的 URL 参数
  // 必须是一个简单对象或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer`是可选方法，主要用于序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求体被发送的数据
  // 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
  // 在没有设置 `transformRequest` 时，则必须是以下类型之一:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属: FormData, File, Blob
  // - Node 专属: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // 发送请求体数据的可选语法
  // 请求方式 post
  // 只有 value 会被发送，key 则不会
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 指定请求超时的毫秒数。
  // 如果请求时间超过 `timeout` 的值，则请求会被中断
  timeout: 1000, // 默认值是 `0` (永不超时)

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，这使测试更加容易。
  // 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示浏览器将要响应的数据类型
  // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 浏览器专属：'blob'
  responseType: 'json', // 默认值

  // `responseEncoding` 表示用于解码响应的编码 (Node.js 专属)
  // 注意：忽略 `responseType` 的值为 'stream'，或者是客户端请求
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // 默认值

  // `xsrfCookieName` 是 xsrf token 的值，被用作 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // 默认值

  // `xsrfHeaderName` 是带有 xsrf token 值的http 请求头名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认值

  // `onUploadProgress` 允许为上传处理进度事件
  // 浏览器专属
  onUploadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  // 浏览器专属
  onDownloadProgress: function (progressEvent) {
    // 处理原生进度事件
  },

  // `maxContentLength` 定义了node.js中允许的HTTP响应内容的最大字节数
  maxContentLength: 2000,

  // `maxBodyLength`（仅Node）定义允许的http请求内容的最大字节数
  maxBodyLength: 2000,

  // `validateStatus` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
  // 则promise 将会 resolved，否则是 rejected。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认值
  },

  // `maxRedirects` 定义了在node.js中要遵循的最大重定向数。
  // 如果设置为0，则不会进行重定向
  maxRedirects: 5, // 默认值

  // `socketPath` 定义了在node.js中使用的UNIX套接字。
  // e.g. '/var/run/docker.sock' 发送请求到 docker 守护进程。
  // 只能指定 `socketPath` 或 `proxy` 。
  // 若都指定，这使用 `socketPath` 。
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定义了代理服务器的主机名，端口和协议。
  // 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。
  // 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。
  // `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。
  // 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。
  // 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // see https://axios-http.com/zh/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicates whether or not the response body should be decompressed 
  // automatically. If set to `true` will also remove the 'content-encoding' header 
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // 默认值

}

### 插槽 Slots

v-slot 有对应的简写 #，因此 <template v-slot:header> 可以简写为 <template #header>。其意思就是“将这部分模板片段传入子组件的 header 插槽中”