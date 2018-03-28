<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="伯乐模式">
      <router-link to="/" slot="left">
        <i class="yd-icon-home hr_icon"></i>
      </router-link>
      <router-link to="/hr" slot="right">
        切换
      </router-link>
      <router-link to="/center" slot="right">
        <i class="yd-icon-ucenter hr_icon"></i>
      </router-link>
    </yd-navbar>
    <yd-cell-group>
      <yd-cell-item>
          <span slot="left">姓名：</span>
          <yd-input slot="right"  required :showClearIcon="false" placeholder="请输入您的姓名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
          <span slot="left">手机号：</span>
          <yd-input slot="right"  regex="mobile" placeholder="请输入手机号码"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
          <span slot="left">邮箱：</span>
          <yd-input slot="right"  regex="email" placeholder="请输入邮箱地址"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group title="选择职业">
      <yd-cell-item arrow>
        <span slot="left">所在地区：</span>
        <input slot="right" type="text" @click.stop="show2 = true" v-model="model2" readonly placeholder="请选择收货地址">
      </yd-cell-item>
    </yd-cell-group>
    <yd-button-group>
        <yd-button size="large">保存</yd-button>
    </yd-button-group>
    <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    <yd-cityselect v-model="show2" :callback="result2" :items="district" provance="新疆" city="乌鲁木齐市" area="天山区"></yd-cityselect>
  </yd-layout>
</template>
<script type="text/babel">
import District from 'ydui-district/dist/jd_province_city_area_id'
export default {
  data () {
    return {
      show1: false,
      show2: false,
      model1: '',
      model2: '职业大类 职业中类 职业小类',
      district: District
    }
  },
  methods: {
    result1 (ret) {
      console.log(ret)
      this.model1 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
    },
    result2 (ret) {
      console.log(ret)
      this.model2 = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.hr_icon
  font-size: 0.6rem;
  color: rgb(255, 104, 93);
</style>
