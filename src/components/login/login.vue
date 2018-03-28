<template>
    <yd-layout>
        <yd-navbar title="登录">
        </yd-navbar>
        <yd-cell-group>
            <yd-cell-item>
                <i slot="icon" class="demo-icons-phone"></i>
                <input slot="right" type="email" v-model='user.email'  placeholder="请输入您的邮箱" autocomplete="off">
            </yd-cell-item>
            <yd-cell-item>
                <i slot="icon" class="demo-icons-phone"></i>
                <input slot="right" type="password" v-model='user.password' pattern="[0-9]*" placeholder="请输入您的密码" autocomplete="off">
            </yd-cell-item>
            <yd-button size="large" ref='login' type="primary" @click.native="submit">登录</yd-button>
        </yd-cell-group>
    </yd-layout>
</template>

<script type="text/babel">
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      user: {
        email: 'lgfinfo@126.com',
        password: '123456'
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    submit () {
      this.$refs.login.$el.classList.remove('yd-btn-primary')
      this.$refs.login.$el.classList.add('yd-btn-disabled')
      this.axios.post('/zh/api/auth/login', {
        email: this.user.email,
        password: this.user.password
      }).then(respond => {
        console.log(respond)
        this.$refs.login.$el.classList.remove('yd-btn-disabled')
        this.$refs.login.$el.classList.add('yd-btn-primary')
        this.login({token: respond.data.token, user: this.user})
        console.log(this.token)
        let redirect = decodeURIComponent(this.$route.query.redirect || '/')
        this.$dialog.toast({
          mes: `用户:${this.user.email}, 登录成功`,
          timeout: 1500,
          icon: 'success',
          callback: () => {
            this.$router.push({
              path: redirect
            })
          }
        })
      }).catch (e => {
        this.$refs.login.$el.classList.add('yd-btn-primary')
        this.$refs.login.$el.classList.remove('yd-btn-disabled')
        this.$dialog.toast({
          mes: `用户名或密码错误`,
          timeout: 1500,
          icon: 'error',
          callback: () => {
            let redirect = decodeURIComponent(this.$route.query.redirect || '/')
            this.$router.push({
              path: redirect
            })
          }
        })
      })
    }
  }
}
</script>
