<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue'
</script>

<template>
  <div id="menu">
    <Menu></Menu>
  </div>
  
  <RouterView />
</template>

<style scoped>
#app{
    border:3px solid #666;
    padding:20px;
    margin: auto;
    width: 700px;
}

#menu {
  border:3px solid #cdcdcd;
    padding:10px;
    margin: auto;
    width: 900px;
}

h2 {
    color: red;
}
</style>
