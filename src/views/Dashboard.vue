<template>
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
</template>
<script>
import Navbar from '@/components/NavbarDashboard.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import swal from 'sweetalert2';

export default {
  components: { Navbar },
  setup() {
    const router = useRouter();
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(api)
      .then((res) => {
        const { data } = res;
        if (data.success) {
          swal.fire({
            title: '身份驗證成功！',
            icon: 'success',
          });
        } else {
          swal.fire({
            title: data.message,
            icon: 'error',
          });
          router.push('/login');
        }
      }).catch((err) => {
        console.error(err);
        swal.fire({
          title: '暫時無法登入！',
          icon: 'error',
        });
        router.push('/login');
      });
  },
};
</script>
