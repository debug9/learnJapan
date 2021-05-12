<template>
  <div>
    <header>
       <ul class="lv1">
        <li class="vocab">
          <span class="title">單字</span>
          <ul class="lv2">
            <li><router-link to="/vocabEnd2su">2字su結尾</router-link></li>
            <li><router-link to="/vocabEnd2ru">2字ru結尾</router-link></li>
            <li><router-link to="/vocabEnd3ru">3字ru結尾</router-link></li>
            <li><router-link to="/vocabEnd2ku">2字ku結尾</router-link></li>
            <li><router-link to="/vocabEnd2ki">2字ki結尾</router-link></li>
          </ul>
        </li>
        <li>
          <router-link class="title" to="/vocab_game">單字小遊戲</router-link>
        </li>
       </ul>
    </header>
    <!-- <vocabEnd2ki></vocabEnd2ki> -->
  </div>
</template>

<script>

export default {
  name: 'memberHeader',
  // components: {
  //   vocabEnd2ki: require('@/components/vocabEnd2ki.vue').default
  // },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/scss/memberHeader.css';
</style>
