<template>
  <h1>App</h1>
  <Header></Header>
  <button @click="funcao"> Add </button>
  {{ count }}
  <Footer></Footer>
</template>

<script setup>

  import {ref} from "vue";
  import Footer from '@/components/Footer.vue'
  import Header from '@/components/Header.vue'

  const count = ref(0);

  function funcao() {
    count.value++
  }

</script>


<style>
</style>
