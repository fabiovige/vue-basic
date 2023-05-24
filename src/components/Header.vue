<template>
  <h2>Header</h2>
</template>

<script setup>
import {onMounted, onUnmounted} from "vue";

onUnmounted(()=>{
    console.log('header desmontado')
})

onMounted(()=>{
    console.log('header montado')
})

</script>

<style>

</style>