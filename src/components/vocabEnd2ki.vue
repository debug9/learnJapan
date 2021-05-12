<template>
  <div class="content">
    <div class="left">
      <vocab-list :name="name"></vocab-list>
    </div><div class="right">
      <creatVocab :name="name"></creatVocab>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vocabEnd2ki',
  components: {
    creatVocab: require('@/components/creatVocab.vue').default,
    vocabList: require('@/components/vocabList.vue').default
  },
  data () {
    return {
      name: 'vocabEnd2ki'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/scss/vocab.css';
.content .right {
  background-image: url('../assets/bg_vocab6.jpg');
  background-size: 600%;
  background-position-x: 84%;
  background-position-y: 47%;
}
.content .left .vocab >>>p:nth-child(even){
  background-color: #e6e3db
}
</style>
