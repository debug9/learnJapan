<template>
  <div class="creat_vocab">
    <div class="input_creat_vocab">
      <input type="text" placeholder="請輸入單字" v-model="hiragana"><input type="text" placeholder="片假名(可省略)" v-model="katakana">
    </div>
    <input type="text" placeholder="請輸入中文" class="input_chinese" v-model="chinese">
    <button class="button_create" @click="creatVocab">新增單字</button>
  </div>
</template>

<script>
export default {
  name: 'creatVocab',
  props: ['name'],
  data () {
    return {
      vocabs: [],
      katakana: '',
      hiragana: '',
      chinese: ''
    }
  },
  methods: {
    creatVocab () {
      if (this.hiragana.length === 0 || this.chinese.length === 0) {
        return false
      }
      const newWord = {Hiragana: this.hiragana, Katakana: '(' + this.katakana + ')', Chinese: this.chinese}
      this.$store.dispatch('creatVocab', [newWord, this.name])
      // const getVocabStr = localStorage.getItem(this.name)
      // const getVocabArr = JSON.parse(getVocabStr)
      // getVocabArr.push(newWord)
      // this.$emit('creatVocab', getVocabArr)
      // const vocabStr = JSON.stringify(getVocabArr)
      // localStorage.setItem(this.name, vocabStr)
      this.hiragana = ''
      this.chinese = ''
      this.katakana = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/scss/vocab.css';
</style>
