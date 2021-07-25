<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-pink">
  <div class="container-fluid">
    <!-- <a class="navbar-brand logoFont" href="#">Perfume</a> -->
    <!-- <router-link to="/" class="nav-link">Perfume</router-link> -->
    <router-link to="/" class="nav-link navbar-brand logoFont fs-3">Perfume</router-link>
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav fs-7">
        <li class="nav-item">
          <router-link to="/admin/products" class="nav-link">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/orders" class="nav-link">訂單</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/coupons" class="nav-link">優惠卷</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" @click="signout()">登出</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    signout() {
      document.cookie = 'hexToken=;expires=;';
      // this.$router.push('/login');
    },
  },
};
</script>
<style lang="scss">
  .fs-7 {
    font-size: 1.2rem;
  }
  .navbar-dark .navbar-nav .router-link-active:focus {
    color: #fff;
  }
  .navbar-dark .navbar-nav .router-link-active {
    color: #fff;
  }
  .logoFont {
    font-family: "Arial Black",sans-serif;
  }
  a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
</style>
