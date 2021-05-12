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
  name: 'vocabEnd2ru',
  components: {
    creatVocab: require('@/components/creatVocab.vue').default,
    vocabList: require('@/components/vocabList.vue').default
  },
  data () {
    return {
      name: 'vocabEnd2ru'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/scss/vocab.css';
.content .right {
  background-image: url('../assets/bg_vocab2.jpg');
  background-position-x: 87%;
  background-position-y: 51%;
}
.content .left .vocab >>>p:nth-child(even){
  background-color: #e4c29c!important
}
</style>
