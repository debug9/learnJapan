<template>
  <div class="vocab">
    <p v-for="(vocab, index) in vocabs" :key="index">
      <span class="hiragana">{{vocab.Hiragana}}</span>
      <sup class="chinese">{{vocab.Katakana}}</sup>
      <span class="katakana">{{vocab.Chinese}}
        <button class="button_del" @click="delVocab(index)">x</button>
      </span>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'vocabList',
  props: ['name'],
  data () {
    return {
      initialValue: true,
      target: null
    }
  },
  created () {
    // localStorage.clear()
    this.$store.dispatch('getVocab', this.name)
    // localStorage.clear()
    // const getVocabNameStr = localStorage.getItem(this.name)
    // if (getVocabNameStr === null) {
    //   this.vocabs = this.vocabDefault
    //   const vocabNameStr = JSON.stringify(this.name)
    //   localStorage.setItem(this.name, vocabNameStr)
    //   const vocabStr = JSON.stringify(this.vocabs)
    //   localStorage.setItem(this.name, vocabStr)
    // } else {
    //   const getVocabStr = localStorage.getItem(this.name)
    //   const getVocabArr = JSON.parse(getVocabStr)
    //   this.vocabs = getVocabArr
    // }
  },
  computed: {
    vocabs () {
      return this.$store.state.vocabs
    }
  },
  methods: {
    delVocab (index) {
      const self = this
      axios.get('http://localhost:3000/' + this.name).then(function (res) {
        self.target = res.data[index]
        self.$store.dispatch('delVocab', [self.name, self.target, index])
      })
      // this.vocabs.splice(index, 1)
      // const getVocabStr = localStorage.getItem(this.name)
      // const getVocabArr = JSON.parse(getVocabStr)
      // getVocabArr.splice(index, 1)
      // const vocabStr = JSON.stringify(getVocabArr)
      // localStorage.setItem(this.name, vocabStr)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/scss/vocab.css';
</style>
