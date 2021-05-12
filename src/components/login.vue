<template>
  <div class="content">
    <div class="left">
    </div><div class="right">
      <div class="title">
        <p>大家學日文</p>
        <p>自訂你的日文學習筆記本<br>
        還有專屬單字小遊戲<br>
        快登入體驗吧！！</p>
      </div>
      <form action="" @submit.prevent="login">
        <div class="login">
          <div class="account">
            <span><img src="../assets/user.png"></span>
            <input type="text" placeholder="請輸入帳號" v-model="valAccount">
          </div>
          <div class="password">
            <span><img src="../assets/lock.png" alt=""></span>
            <input type="text" placeholder="請輸入密碼" v-model="valPassword">
          </div>
          <p class="warning">{{warning}}</p>
          <div class="login_button">
            <button class="button_login" @click="login">登入</button>
            <router-link class="button_forgetPW" to="/ForgetPW">忘記密碼</router-link>
            <router-link class="button_register" to="/ForgetPW">註冊會員</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      valAccount: '',
      valPassword: ''
    }
  },
  computed: {
    warning () {
      return this.$store.state.warning
    }
  },
  methods: {
    login () {
      if (!this.valAccount) {
        this.$store.state.warning = '請先輸入帳號喔'
        console.log('rser')
        return false
      } else if (!this.valPassword) {
        this.$store.state.warning = '請先輸入密碼喔'
        return false
      } else {
        this.$store.dispatch('GetUser', {'account': this.valAccount, 'password': this.valPassword})
      }
      this.valAccount = ''
      this.valPassword = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/scss/login.css';
</style>
