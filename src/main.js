import { createApp } from 'vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';
import toDate from './assets/javascript/toDate';
import toCurrency from './assets/javascript/toCurrency';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');
const options = {
  icon: 'success',
  timer: 2000,
  showConfirmButton: false,
  confirmButtonColor: '#a43060',
};
AOS.init({
  once: true,
});

const app = createApp(App);
app.config.globalProperties.date = toDate;
app.config.globalProperties.$toCurrency = toCurrency;
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(VueSweetalert2, options);
app.use(VueAxios, axios);
app.use(router);
app.component('Loading', Loading);
app.mount('#app');
