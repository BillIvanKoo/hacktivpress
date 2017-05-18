<template lang="html">
  <div class="">
    <add-article class="add" @createArticle="getter">
    </add-article>
    <el-card v-for="article in articles" class="box">
    <div slot="header">
      <span style="line-height: 36px;" class="title">{{article.title}}</span>
      <span style="float: right">written by: {{article.author.username}} <br> category: {{article.category}}</span>
    </div>
    <div>
      <p>{{article.content}}</p>
    </div>
  </el-card>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AddArticle from './AddArticle'
Vue.use(VueAxios, axios)
export default {
  data(){
    return {
      articles : []
    }
  },
  created(){
    this.getter()
  },
  components: {
    AddArticle
  },
  methods: {
    getter(){
      let that = this
      Vue.axios.get('http://localhost:3000/articles')
      .then((response)=>{
        that.articles = response.data
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .add{
    margin: 20px
  }
  .box{
    margin: 20px
  }
  .title{
    font-size: 64px;
  }
</style>
