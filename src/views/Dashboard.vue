<template>
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
</template>
<script>
import Navbar from '@/components/NavbarDashboard.vue';

export default {
  components: { Navbar },
  data() {
    return {};
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api)
      .then((res) => {
        if (res.data.success) {
          this.status = true;
        } else {
          this.$router.push('/');
        }
      });
  },
};
</script>
