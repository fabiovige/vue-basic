<template>
  <div class="container">
      <div class="row">
        <div class="col-md-12">

          <Header></Header>

          <Menu></Menu>

          <RouterView />

          <Footer></Footer>

        </div>
      </div>
  </div>

</template>

<script setup>
  import Footer from '@/components/Footer.vue'
  import Menu from "@/components/Menu.vue";
  import Header from "@/components/Header.vue";
</script>


<style>
</style>
