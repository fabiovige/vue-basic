<script setup>

import {onMounted, onUnmounted, onUpdated} from "vue";

onMounted(()=>{
    console.log('monta componente home')
})

onUnmounted(()=>{
    console.log('desmonta componente home')
})

onUpdated(()=>{
    console.log('atualiza algum componente na home')
})

</script>

<template>
  <h2>Dashboard II ok</h2>
</template>
