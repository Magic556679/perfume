import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import toDate from './assets/javascript/toDate';

const app = createApp(App);
app.config.globalProperties.date = toDate;
app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.mount('#app');
