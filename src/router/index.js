import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import memberHeader from '@/components/memberHeader'
import mainContent from '@/components/mainContent'
import vocabEnd2su from '@/components/vocabEnd2su'
import vocabEnd2ru from '@/components/vocabEnd2ru'
import vocabEnd3ru from '@/components/vocabEnd3ru'
import vocabEnd2ku from '@/components/vocabEnd2ku'
import vocabEnd2ki from '@/components/vocabEnd2ki'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
      // children: [
      //   { path: '/', component: test },
      //   { path: '/', component: test2 }
      // ]
    },
    { path: '/member',
      name: 'memberHeader',
      components: {
        default: memberHeader,
        mainContent: mainContent
      }
    },
    {
      path: '/vocabEnd2su',
      name: 'vocabEnd2su',
      components: {
        default: memberHeader,
        vocabEnd2su: vocabEnd2su
      }
    },
    {
      path: '/vocabEnd2ru',
      name: 'vocabEnd2ru',
      components: {
        default: memberHeader,
        vocabEnd2ru: vocabEnd2ru
      }
    },
    {
      path: '/vocabEnd3ru',
      name: 'vocabEnd3ru',
      components: {
        default: memberHeader,
        vocabEnd3ru: vocabEnd3ru
      }
    },
    {
      path: '/vocabEnd2ku',
      name: 'vocabEnd2ku',
      components: {
        default: memberHeader,
        vocabEnd2ku: vocabEnd2ku
      }
    },
    {
      path: '/vocabEnd2ki',
      name: 'vocabEnd2ki',
      components: {
        default: memberHeader,
        vocabEnd2ki: vocabEnd2ki
      }
    }
  ]
})
