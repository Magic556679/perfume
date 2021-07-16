import { createApp } from 'vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import toDate from './assets/javascript/toDate';
import toCurrency from './assets/javascript/toCurrency';

const app = createApp(App);
app.config.globalProperties.date = toDate;
app.config.globalProperties.$toCurrency = toCurrency;
app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.mount('#app');
