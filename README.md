# vue-cli3-ts

> A Vue-cli3 + typescript project
## Project setup
``` 
npm install
npm run serve  (localhost:8080)
npm run build
```

### 详细说明

#### Create a project
```
# npm 或者 yarn安装vuecli3.0
npm install -g @vue/cli
# OR
yarn global add @vue/cli

```
创建目录

```
vue create vue-cli3-ts
```
配置展示
```
1.   node_modules //当前node模块存放处
 2.   public //index页面所在镜头文件也可以放这个里面
 3.   src //当前项目存放
        assets //静态文件存放
        components //组件存放
        views //项目存放
        types //存放接口声明
        app.vue //主要路由输入地方
        main //总的js文件
        router //路由文件
        shims-tsx.d //兼容jsx
        shims-vue.d //兼容vue
        store //vuex总文件
 4.   pakeage.js //文件（我们安装的依赖都再里面可以看到，也可以根据这个去下载node_modules）
 5.   我们还少一个vue.config.js 和 pakeage.js 同级
 6    tsconfig.json  ts的配置

```
vue.config.js
```
  // 添加去console插件和gzip压缩插件，配置全局路径
  // vue.config.js
  const path = require('path');
  //去console插件
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  //gzip压缩插件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  function resolve (dir) {
      return path.join(__dirname, dir)
  }
  module.exports = {
      // ...
   chainWebpack: config => {
           // 修复HMR
           config.resolve.symlinks(true)
           // 修复Lazy loading routes Error： Cyclic dependency  [https://github.com/vuejs/vue-cli/issues/1669]
           config.plugin('html').tap(args => {
               args[0].chunksSortMode = 'none'
               return args
           })
           config.resolve.alias
               .set('@', resolve('src'))
               .set('assets',resolve('src/assets'))
               .set('components',resolve('src/components'))
    },   
   configureWebpack: config => {
             let plugins = [
                 new UglifyJsPlugin({
                     uglifyOptions: {
                         compress: {
                             warnings: false,
                             drop_debugger: true,
                             drop_console: true,
                         },
                     },
                     sourceMap: false,
                     parallel: true,
                 }),
                 new CompressionWebpackPlugin({
                     filename: '[path].gz[query]',
                     algorithm: 'gzip',
                     test: new RegExp(
                         '\\.(' +
                         ['js', 'css'].join('|') +
                         ')$',
                     ),
                     threshold: 10240,
                     minRatio: 0.8,
                 }),
             ]
             if (process.env.NODE_ENV !== 'development') {
                 config.plugins = [...config.plugins, ...plugins]
             }
    },   
  }    
  
```

tsconfig.js
```
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true, //允许从没有设置默认导出的模块默认导入
    "noImplicitAny": false, //在表达式和声明上有隐含的any类型报错
    "sourceMap": true,
    "baseUrl": "."
    ...
}
```
### axios的使用
请在axios.ts文件下查看

```
src 
  utils
    axios.ts 
  types
    axios.d.ts  
```

### vuex多模块的使用
请在store文件下查看
```
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types';
import * as getters from './getters'
import {chat} from './modules/chat/chat'
Vue.use(Vuex)
const store: StoreOptions<RootState> = {
  state: {},
  getters,
  modules: {
    chat
  }
}

export default new Vuex.Store<RootState>(store)
```
