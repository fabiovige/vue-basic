<template>
  <h1>App</h1>
    <h2>{{ userName }}</h2>
  <button v-on:click="showHeader = !showHeader">
    <template v-if="!showHeader"> abrir</template>
    <template v-else> fechar</template>
  </button>
  <div v-if="showHeader">
        <Header></Header>
      <img :src="img" alt="">
    </div>

    <Menu></Menu>
  <button @click="count++"> Add </button>
  {{ count }}

  <h3>Profile</h3>
  <ul>
    <li v-for="(value, key) in user" key="{{ key }}">{{ key }} - {{ value }}</li>
  </ul>



  <h3>User list</h3>
  <ul>
    <template v-for="(user) in users" :key="user.id">
      <li v-if="user.is_admin === 1">{{ user.firstName }} - {{ user.age }}</li>
    </template>
  </ul>

  <RouterView />

  <Footer></Footer>
</template>

<script setup>
// ref somente valores primitivos "strings, int, bool, undefined, etc"
// reactive somente para objetos exemplo: array [] e objetos {}
import {onUpdated, onMounted, ref, reactive} from "vue";

  import Menu from '@/components/Menu.vue'
  import Footer from '@/components/Footer.vue'
  import Header from '@/components/Header.vue'

  const count = ref(0);
  const showHeader = ref(false);
  const userName = ref('');
  const img = ref('https://picsum.photos/200/300');

  const user = reactive({
    id: 1,
    firstName: 'Fabio Vige',
    age: 47,
    is_admin: 1
  });

  const users = reactive([
    {
      id: 1,
      firstName: 'Fabio Vige',
      age: 47,
      is_admin: 1
    },
    {
      id: 2,
      firstName: 'Valéria Nunes',
      age: 41,
      is_admin: 1
    },
    {
      id: 3,
      firstName: 'Isabela Nunes',
      age: 23,
      is_admin: 0
    },
    {
      id: 4,
      firstName: 'Gustavo Nunes',
      age: 21,
      is_admin: 0
    },
    {
      id: 5,
      firstName: 'Eduardo Nunes',
      age: 17,
      is_admin: 0
    },
  ]);

  onMounted(() => {
      console.log("onMounted");
      console.log('count ' + count.value);
  })

  onUpdated(()=>{
    console.log("atualiza algum componente no App");
    console.log('count ' + count.value);
  })

</script>


<style>
</style>
