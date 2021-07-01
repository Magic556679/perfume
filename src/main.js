import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.mount('#app');
