<template>
  <form @submit.prevent="login">
    <div class="mb-3">
      <label class="form-label">E-mail</label>
      <input type="email" class="form-control" v-model="user.email">
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <input type="password" class="form-control" v-model="user.password">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script setup>
import {reactive} from "vue";
import Http from "@/services/Http";
import {UseAuthStore} from "@/stores/UseAuthStore";

const auth = UseAuthStore();

const user = reactive({
  email: 'lcasanova@example.net',
  password: 'password'
});

async function login() {
  try {
    const { data } = await Http.post('/login', user);
    console.log(data.data);
    auth.setToken(data.data.token);
    auth.setUser(data.data.user);
  } catch (error) {
    console.log(error?.response.data);
  }
}
</script>

<style scoped>

</style>