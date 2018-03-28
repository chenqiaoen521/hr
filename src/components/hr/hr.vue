<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="HR模式">
        <router-link to="/" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
        <router-link to="/" slot="right">
           切换
        </router-link>
        <router-link to="/center" slot="right">
            <i class="yd-icon-ucenter hr_icon"></i>
        </router-link>
    </yd-navbar>
    <yd-scrolltab>
        <yd-scrolltab-panel v-for="(item, index) in list" :label="item.label" :key="index" :icon="item.icon" :active="item.active">
          <div style="height: 350px;">{{item.content}}</div>
        </yd-scrolltab-panel>
    </yd-scrolltab>
  </yd-layout>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      list: [
        {label: '营销人才', icon: 'demo-icons-category1', color: 'gray', content: '人才信息'},
        {label: 'IT工程师', icon: 'demo-icons-category2', color: 'blue', content: '人才信息'},
        {label: '运营人才', icon: 'demo-icons-category3', color: 'yellow', content: '人才信息'},
        {label: '高级管理者', icon: 'demo-icons-category4', color: 'green', content: '人才信息'},
        {label: '政府沟通者', icon: 'demo-icons-category5', color: 'saddlebrown', content: '人才信息'},
        {label: '跨区经营者', icon: 'demo-icons-category6', color: 'darkgoldenrod', content: '人才信息'},
        {label: '金融专家', icon: 'demo-icons-category7', color: 'indianred', content: '人才信息'},
        {label: '经经人才', icon: 'demo-icons-category8', color: 'aqua', content: '人才信息'}
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.hr_icon
  font-size: 0.6rem;
  color: rgb(255, 104, 93);
</style>
