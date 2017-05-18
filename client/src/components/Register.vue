<template lang="html">
  <div class="">
    <el-menu-item index="4" @click="dialogFormVisible = true">Register</el-menu-item>
    <el-dialog title="Register" :visible.sync="dialogFormVisible">
  <el-form>
    <el-form-item label="Username">
      <el-input v-model="form.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="signUp">Submit</el-button>
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
  data(){
    return{
      dialogFormVisible: false,
      form: {}
    }
  },
  methods: {
    signUp(){
      let that = this
      Vue.axios.post('http://localhost:3000/users/signup', {
        username: that.form.username,
        password: that.form.password
      })
      .then((response)=>{
        that.dialogFormVisible = false
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>