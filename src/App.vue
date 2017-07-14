<template>
  <div id="app">
    <m-header></m-header>
    <!--路由导航栏-->
    <tab></tab>
    <!--路由页面-->
    <router-view></router-view>
  </div>
</template>

<script>
  // 导入组件时 .vue后缀可以省略, 自动会找.vue文件
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  export default {
    name: 'app',
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus">
</style>
