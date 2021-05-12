import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from './router'

Vue.use(Vuex)

const store1 = new Vuex.Store({
  state: {
    warning: '',
    vocabs: ''
  },
  actions: {
    GetUser (context, member) {
      axios.get('http://localhost:3000/member').then(function (res) {
        if (res.data[0].account === member.account && res.data[0].password === member.password) {
          localStorage.setItem('token', 'ImLogin')
          this.$router.push('/member')
        } else if (res.data[0].account !== member.account) {
          context.commit('wrongAccount')
        } else if (res.data[0].password !== member.password) {
          context.commit('wrongPassword')
        }
      })
    },
    getVocab (context, name) {
      const getVocabNameStr = localStorage.getItem(name)
      if (getVocabNameStr === null) {
        axios.get('http://localhost:3000/' + name).then(function (res) {
          context.commit('setVocab', res.data)
        })
        const vocabNameStr = JSON.stringify(name)
        localStorage.setItem(name, vocabNameStr)
      } else {
        axios.get('http://localhost:3000/' + name).then(function (res) {
          context.commit('setVocab', res.data)
        })
      }
    },
    delVocab (context, data) {
      let targrtVocab = context.state.vocabs[data[2]].Hiragana
      if (targrtVocab === data[1].Hiragana) {
        axios.delete('http://localhost:3000/' + data[0] + '/' + data[1].id).then(function (res) {
          context.commit('delVocab', data[2])
        })
      } else {
        return false
      }
    },
    creatVocab (context, data) {
      axios.post('http://localhost:3000/' + data[1], data[0]).then(function (res) {
        context.commit('creatVocab', data[0])
      })
    }
  },
  mutations: {
    wrongAccount (state) {
      state.warning = '此帳號尚未註冊，請先註冊會員～'
    },
    wrongPassword (state) {
      state.warning = '密碼輸入錯誤，請重新輸入'
    },
    setVocab (state, data) {
      state.vocabs = data
    },
    delVocab (state, targrtVocab) {
      state.vocabs.splice(targrtVocab, 1)
    },
    creatVocab (state, data) {
      state.vocabs.push(data)
    }
  },
  getters: {
  }
})
export default store1
