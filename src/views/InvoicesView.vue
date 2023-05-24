<script setup>
import {onMounted, onUnmounted, onUpdated} from "vue";

onMounted(()=>{
    console.log('monta componente invoice')
})

onUnmounted(()=>{
    console.log('desmonta componente invoice')
})

onUpdated(()=>{
    console.log('atualiza um componente no invoice')
})

</script>

<template>
  <h2 id="app-invoices">Invoices</h2>
</template>

<style scoped>
  #app-invoices {
    color: blue;
  }
</style>