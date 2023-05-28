import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import {createPinia} from "pinia";
import router from './router'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

app.mount('#app');
