// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('token') === 'ImLogin'
  if (isLogin) {
    next()
  } else {
    if (to.path !== '/') {
      next('/')
    } else {
      next()
    }
  }
})
