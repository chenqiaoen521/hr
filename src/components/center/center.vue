<template>
  <div>
    <header class="header">
      <router-link to="/">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <div class="right">
        <div class="item">
          <router-link to="/center/resume" tag="div" class="resume" >
            我的简历
          </router-link>
        </div>
        <div class="item">
          <router-link to="/center/history" tag="div" class="resume">
            应聘记录
          </router-link>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<script type="text/babel">
import { Group, Cell } from 'vux'
export default {
  components: {
    Group,
    Cell
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.header
  height: 1rem;
  line-height:1rem;
  padding: 0 .2rem;
  background: #fff;
  .right
    float: right;
    width: 94.88%;
    display: flex;
    .item
      flex: 1;
      .resume
        width: 90px;
        margin: 0 auto;
        text-align: center;
        height: 1rem;
        font-size: .3rem;
        box-sizing: border-box;
        &.router-link-active
          color: #e93330;
          position: relative;
          &:after
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 2px;
            background: #e93330;

</style>