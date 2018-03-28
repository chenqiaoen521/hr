<template>
  <div class="middle">
    <group>
      <div class="title">
        <div class="left">个人信息</div>
        <div class="right">dasd</div>
      </div>
      <div class="add">
        添加个人信息
      </div>
    </group>
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
.middle
  .add
    height: 50px;
    font-size: 12px;
    line-height: 50px;
    text-align: center;
    color: #5477da;
  .title
    height: .6rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    background: #fbf9f9;
    font-size: 13px;
    .left
      flex: 0 0 100px;
      line-height: .6rem;
    .right
      flex: 0 0 50px;
      line-height: .6rem;
</style>