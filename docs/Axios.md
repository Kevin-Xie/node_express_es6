# Axios

Axios 是一个基于Promise 的HTTP 库，可以用于前端向后端发送请求。

## 安装

* npm install axios --save
  
* 在 Vue 的 main.js 里面加上下面语句， 之后就可以在组件里面使用 this.$http 来使用 axios 了
    ``` javascript
    import Axios from 'axios'
    Vue.prototype.$http = Axios
    ```

## 使用

调用 Axios 会返回一个 Promise，然后 then 和 catch 来获取数据和捕获异常

### GET

``` javascript
this.$http.get('/api/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
### POST

### DELETE

### PUT