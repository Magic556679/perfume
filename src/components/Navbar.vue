<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-pink">
  <div class="container-fluid">
    <!-- <a class="navbar-brand logoFont" href="#">
      <router-link to="/" class="nav-link ">Perfume</router-link></a> -->
      <router-link to="/" class="nav-link navbar-brand logoFont fs-3">Perfume</router-link>
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex justify-content-end" id="navbarNav" >
      <ul class="navbar-nav fs-5">
        <li class="nav-item">
          <router-link to="/" class="nav-link">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">商品</router-link>
        </li>
        <li class="nav-item position-relative">
          <router-link to="/cart" class="nav-link">
          <i class="bi bi-cart-fill"></i>
          </router-link>
          <!-- <div class="rounded-pill bg-danger
          text-white position-absolute">{{ cart }}</div> -->
          <div class="rounded-pill bg-danger
          text-white position-absolute" v-if="cart.carts">{{ cart.carts.length }}</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
        // let totleQty = 0;
        // this.cart = res.data.data.carts.forEach((item) => {
        //   totleQty += item.qty;
        // });
        // this.cart = totleQty;
      });
    },
  },
  mounted() {
    this.getCart();
    emitter.on('update-cart', () => {
      this.getCart();
    });
  },
};
</script>
<style lang="scss">
  .navbar-dark .navbar-nav .router-link-active:focus {
    color: #fff;
  }
  .navbar-dark .navbar-nav .router-link-active {
    color: #fff;
  }
  .logoFont {
    font-family: "Arial Black",sans-serif;
  }
  .nav-link a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  .position-absolute {
    top: 1px;
    right: -2px;
    width: 20px;
    font-size: 0.5rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    .position-absolute {
      top: 0;
      left: 12px;
    }
  }
  @media screen and (max-width: 767px) {
    .position-absolute {
      top: 0;
      left: 12px;
    }
  }
</style>
