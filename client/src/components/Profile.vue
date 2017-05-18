<template lang="html">
  <div class="">
    <h1>Welcome {{user.username}}!!</h1>
    <h3>activities</h3>
    <el-table :data="user.articles" style="width: 100%">
      <el-table-column label="Title">
        <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
      </el-table-column>
      <el-table-column label="Content" >
        <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.content }}</span>
      </template>
      </el-table-column>
      <el-table-column label="Category">
        <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.category }}</span>
      </template>
      </el-table-column>
      <el-table-column>
        <template scope="scope">
        <el-button
          size="small">Edit</el-button>
        <el-button
          size="small"
          type="danger" @click="deleteArticle(scope.row._id)">Delete</el-button>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
export default {
  data(){
    return {
      user: {}
    }
  },
  methods: {
    getter(){
      let that = this
      Vue.axios.get('http://localhost:3000/users/specific',{
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response)=>{
        that.user = response.data
      }).catch((err)=>{
        console.log(err)
      })
    },
    deleteArticle(id){
      let that = this
      Vue.axios.delete('http://localhost:3000/articles/' + id, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response)=>{
        console.log(response)
        that.getter()
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
  created(){
    this.getter()
  }
}
</script>

<style lang="css">
</style>
