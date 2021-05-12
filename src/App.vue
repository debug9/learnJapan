<template>
  <div id="app">
    <!-- 在這裡寫的會一直出現 -->
    <router-view></router-view>
    <router-view name="mainContent"></router-view>
    <router-view name="vocabEnd2su"></router-view>
    <router-view name="vocabEnd2ru"></router-view>
    <router-view name="vocabEnd3ru"></router-view>
    <router-view name="vocabEnd2ku"></router-view>
    <router-view name="vocabEnd2ki"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  /* @import './assets/scss/login.css'; */
*{
  margin: 0;
}

html{
  height: 80%;
  margin-top: 2.5%;
}
body{
  width: 1280px;
}

body,#app,.content,.left,.right{
  margin: 0 auto;
  height: 100%!important;
}

</style>
