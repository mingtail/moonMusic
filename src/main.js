import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// Vue.config.productionTip = false  //关闭生产模式下给出的提示.

// 公共样式可以在main.js里面引入
import 'common/stylus/index.styl'

// fastclick固定用法, 绑定document.body, body下的点击没有延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
