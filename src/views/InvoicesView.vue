<template>
  <h2>Invoices</h2>
  <ul>
    <li v-for="invoice in invoices.data" :key="invoice.id">
      {{invoice.id}} {{invoice.user.firstName}} {{invoice.type}} {{invoice.paid}} {{invoice.value}}
    </li>
  </ul>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import Http from "@/services/Http";

let invoices = reactive({data:[]});

onMounted(async () => {
  try {
    const {data} = await Http.get('/invoices');
    console.log(data);
    invoices.data = data.data;
  } catch (e) {
    console.log(e);
  }
})

</script>

<style scoped>
</style>