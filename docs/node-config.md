# node-config

* https://github.com/lorenwest/node-config
* 在不同的运行环境（development, qa, prod...）下，有些配置往往会不一样（例如DB 的配置，log的输出方式的配置）
* 通常都是根据环境变量来选择不同的配置信息
* node-config 就是用来解决在不同运行环境的自动使用不同的配置文件， 例如 dev 环境使用development config， prod 环境使用prod config。


### 使用
* npm install config --save
* 在/config 目录, 创建 default.js, development.js, production.js
* default.js --> 公用的配置信息
* development.js --> 开发环境下的配置信息
* production.js --> 生产环境下的配置信息
``` javascript 
const config = require('config');
// config  会自动引用default.js 的内容， 然后根据process.env.NODE_ENV 的值（development or production）来合并 development.js or production.js

// 在不同的运行环境设置不同的环境变量值， 默认config会自动选择development

```


# cross-env
* package.json 里面要给塞入环境变量值， 在不同的平台（Windows，Linux）下的命令不一样， 可以使用cross-env 来统一用法

### 使用
* npm install cross-env --save-dev
``` json
// package.json
    "dev": " cross-env NODE_ENV=development nodemon index.js",
    "prod": "node ../client/build/build.js && cross-env NODE_ENV=production node index.js",
```