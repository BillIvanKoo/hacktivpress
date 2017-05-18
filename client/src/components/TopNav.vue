<template lang="html">
  <el-menu class="el-menu-demo" mode="horizontal">
  <router-link to="/"><el-menu-item index="1">Home</el-menu-item></router-link>
  <el-submenu index="2">
    <template slot="title">Category</template>
    <el-menu-item index="2-1">music</el-menu-item>
    <el-menu-item index="2-2">fashion</el-menu-item>
    <el-menu-item index="2-3">car</el-menu-item>
    <el-menu-item index="2-4">real estate</el-menu-item>
    <el-menu-item index="2-5">beauty</el-menu-item>
    <el-menu-item index="2-6">travel</el-menu-item>
    <el-menu-item index="2-7">design</el-menu-item>
    <el-menu-item index="2-8">food</el-menu-item>
    <el-menu-item index="2-9">health</el-menu-item>
    <el-menu-item index="2-10">technology</el-menu-item>
  </el-submenu>
  <sign-in v-if="authorised===false" @signIn="authorised=true"></sign-in>
  <register v-if="authorised===false"></register>
  <router-link to="/profile"><el-menu-item index="5" v-if="authorised===true">Profile</el-menu-item></router-link>
  <el-menu-item index="6" v-if="authorised===true" @click="signOut">Sign Out</el-menu-item>
</el-menu>
</template>

<script>
import SignIn from './SignIn'
import Register from './Register'
export default {
  data(){
    return{
      authorised: false
    }
  },
  components: {
    SignIn, Register
  },
  methods: {
    signOut(){
      this.authorised= false
      localStorage.removeItem('token')
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.authorised = true
    }
  }
}
</script>

<style lang="css">
</style>
