<template>
  <div class="">
    <el-button @click="open()">Edit</el-button>
    
    <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
      <el-form :model="article">
        <el-form-item label="Title">
          <el-input v-model="article.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Content">
          <el-input type="textarea" :rows="4" v-model="article.content" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Category">
          <el-select v-model="article.category" placeholder="Please select a category">
            <el-option v-for="category in categories" :label="category.value" :value="category.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="createArticle">Submit</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
export default {
  props: ['article'],
  data(){
    return {
      dialogFormVisible: false,
      form: {},
      categories: [
        {
          value: 'music'
        },
        {
          value: 'fashion'
        },
        {
          value: 'car'
        },
        {
          value: 'real estate'
        },
        {
          value: 'beauty'
        },
        {
          value: 'travel'
        },
        {
          value: 'design'
        },
        {
          value: 'food'
        },
        {
          value: 'health'
        },
        {
          value: 'technology'
        }
      ]
    }
  },
  methods: {
    open(){
      if(localStorage.getItem('token')){
        this.dialogFormVisible=true
      } else {
        this.$message.error('Please sign in to write an article!');
      }
    },
    editArticle(){
      let that = this
      Vue.axios.post('http://localhost:3000/articles',{
        title: that.form.title,
        content: that.form.content,
        category: that.form.category
      },{
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response)=>{
        that.dialogFormVisible = false
        that.$emit('createArticle')
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style>
</style>