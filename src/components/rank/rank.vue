<template>
  <div class="rank" ref="rank">
    <scroll :data="topList" class="toplist" ref="toplist">
      <ul>
        <li @click="selectItem(item)" class="item" v-for="item in topList"></li>
      </ul>
    </scroll>

  </div>
</template>

<script type="text/javascript">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'

  export default {
    data () {
      return {
        topList: []
      }
    },
    components: {
      Scroll,
      Loading
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
