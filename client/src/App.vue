<template>
  <div id="app">
    <top-nav>
    </top-nav>
    <router-view></router-view>
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
  </div>
</template>

<script>
import TopNav from './components/TopNav'
export default {
  name: 'app',
  components: {
    TopNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
