<template lang="html">
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Home</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Category</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">Sign In</el-menu-item>
  <el-menu-item index="4">Register</el-menu-item>
  <el-menu-item index="5">Profile</el-menu-item>
  <el-menu-item index="6">Sign Out</el-menu-item>
</el-menu>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
