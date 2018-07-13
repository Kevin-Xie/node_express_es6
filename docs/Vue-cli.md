# Vue-cli

Vue-cli 是 Vue 官方提供的工具，用于快速生成前端开发的脚手架。 结合了Webpack可以方便的进行打包，并且配置好了babel loader， 可以方便的使用ES6

## 安装

* npm install -g vue-cli

* vue init webpack client

* cd client

* npm run 

    ![vue_cli_init_project](./pictures/vue_cli_init_project.png)

* cd client 

* npm run dev  ==> 浏览器打开localhost:8080(默认)

    ![vue_init_demo](./pictures/vue_init_demo.png)

* npm run build  ==> 自动打包资源到 client/dist 目录下

## 关于页面和组件

使用 Vue 构建的应用程序，应该把页面上的所有的东西当作组件，包括页面也是组件。

### 组件

* header， footer, menubar, button ... 都是组件
* 一个组件可以包含另一个（多个）组件， 例如 header 里面包含 menu 组件
* 父组件通过传递 props 跟子组件通信，而子组件通过emit event 跟父组件通信

### 页面

* 页面也可以看出是一个组件，一个大的组件，用于承载更多其他组件， 才最终呈现出一个页面
* 页面怎么跳转依赖路由的配置

## 目录讲解

### build, config
* 这两个目录基本都是 webpack 和环境的配置， 基本上不用怎么动

### dist
* npm run build 会把打包的文件放到 dist 目录
* 包括 css, js ... 以及/static 下面的资源（图片等）

### src
* assets 静态资源目录， 可以在代码里面有通过相对路径来引用， 这些资源会被 webpack 打包，成为代码的一部分
* components 组件目录，所有的组件、页面都写在这里面，根据不同业务再继续细分目录
* router 前端路由目录，根据路由的配置来跳转到别的页面组件
* store vuex 的目录，存储全局状态
* main.js 和 App.vue， main.js 是Vue 的主入口，里面会渲染App.vue 

### static
* 真实的静态资源目录
* 这里面的静态资源会被原封不动的打包（复制）到最终的打包目录 dist 下
* 可以通过绝对路径来引用static 下面的资源， 如 /static/[filename]