<template>
  <h1>App</h1>
    <h2>{{ userName }}</h2>
    <div v-if="showHeader">
        <Header></Header>
    </div>
    <button v-on:click="showHeader = !showHeader"> show header</button>
    <Menu></Menu>
  <button @click="count++"> Add </button>
  {{ count }}

  <RouterView />

  <Footer></Footer>
</template>

<script setup>

import {onUpdated, onMounted, ref} from "vue";

  import Menu from '@/components/Menu.vue'
  import Footer from '@/components/Footer.vue'
  import Header from '@/components/Header.vue'

  const count = ref(0);
  const showHeader = ref(false);
  const userName = ref('')
  const users = ref([])

  onMounted(() => {
      console.log("onMounted");
      users.value = [
          {
              firstName: 'Isabela Nunes',
              age: 23
          },
          {
              firstName: 'Gusravo Nunes',
              age: 21
          },
          {
              firstName: 'Eduardo Nunes',
              age: 17
          },
      ]
  })

  onUpdated(()=>{
    console.log("atualiza algum componente no App");
  })

</script>


<style>
</style>
