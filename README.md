# showu_jcy

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### Content

使用vuex 控制 变化的类名   来切换页面展示样式
如果一个组件的内容展示完了 修改store 的textOver值，，下次切换这个text组件的时候判断一下，如果over 了直接展示全部的text

使用了vue-router  来控制路由
雪花采用生产者模式创造
使用了css3 的3d 效果

[heroku: ](https://welcome-jcy-10001.herokuapp.com/#/)