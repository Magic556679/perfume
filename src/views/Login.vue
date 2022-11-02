<template>
  <div class="container mt-5">
    <form class="row justify-content-center"  @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input  type="email" id="inputEmail" class="form-control"
            placeholder="Email address" v-model="user.username" required autofocus>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword"
            class="form-control" v-model="user.password" placeholder="Password" required></div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import swal from 'sweetalert2';
import axios from 'axios';

export default {
  setup() {
    const user = ref({
      username: '',
      password: '',
    });
    const router = useRouter();
    const signIn = () => {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      axios.post(api, user.value).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          router.push({ path: '/admin/' });
          swal.fire({
            title: res.data.message,
            icon: 'success',
          });
        } else {
          swal.fire({
            title: res.data.message,
            icon: 'error',
          });
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    return {
      user,
      signIn,
    };
  },
};
</script>
