<template>
  <div id="app">
    <SidebarPage></SidebarPage>
    <router-view/>
  </div>
</template>

<script>
import SidebarPage from './components/SidebarPage.vue';
export default {
  components: {
    SidebarPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


a {
  color: #000000 !important;
}

</style>
