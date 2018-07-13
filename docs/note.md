### Problem

1. 尝试用 :src 来绑定<img> 的图片路径， 发现图片一直加载不出来, 打印出来看logo的路径也是正确的, 代码如下：
    ``` javascript
    <img :src="logo" slot="logo" style="width: 50%;">
    data () {
        return {
            logo: '../../assets/logo.png',
        }
    },
    ``` 
    改成把图片 require 进来就可以了
    ``` javascript
    data () {
        return {
            logo: require('../../assets/logo.png'),
        }
    },
    ``` 

2. Vue-cli 下的静态资源 assets、 static 目录的区别
    * Vue 文件的template、CSS 最终要由webpack loader（vue-html-loader 、 css-loader）进行解析打包
    * 其中的 img  "./logo.png" 会被解析为模块依赖，用 url-loader 和 file-loader 来处理
    * assets 和 static 都是资源目录
    * assets 下面的资源会被 webpack 最终打包到代码里面； static 下面的目录则是直接被复制到打包目录/dist/static 下面
    * 引用 assets 下面的资源用 相对路径，如 '../../assets/logo.png'
    * 引用 static 下面的资源用 绝对路径，由config 决定，如下的config， 则资源路径要写成 /static/[filename]
        ``` javascript
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        ```

3. 如何在 Vue 中引入 js 库
    * 例如引入 axios， lodash ...

        ``` javascript
        import Axios from 'axios';
        import _ from lodash;

        // 在Vue 组件中用this._, this.$http 来调用， 但是这种方法容易被不小心覆盖掉， 例如 this._ = "underscore", 可以直接把原来 lodash 覆盖掉
        Vue.prototype.$http = Axios;
        Vue.prototype._ = lodash;   

        // 也是通过this._, this.$http 来调用，这种方法可以有效的防止属性被覆盖
        Object.defineProperty(Vue.prototype, '$http', {value: Axios});
        Object.defineProperty(Vue.prototype, '_', {value: _});
        ```
        ![assign_err](./pictures/assign_err.png)