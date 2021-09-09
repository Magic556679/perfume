<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-pink" id="nav">
  <div class="container-fluid">
    <router-link to="/" class="nav-link navbar-brand logoFont fs-3">Perfume</router-link>
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation" @click="openNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex justify-content-end"
    :class=" toggleNav ? 'show' :'' " id="navbarNav" >
      <ul class="navbar-nav fs-7">
        <li class="nav-item">
          <router-link to="/" class="nav-link" @click="closeNav">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" @click="closeNav">商品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" @click="closeNav">關於我們</router-link>
        </li>
        <li class="nav-item position-relative">
          <router-link to="/favorite" class="nav-link" @click="closeNav">
          <i class="bi bi-suit-heart-fill"></i>
          </router-link>
          <div class="rounded-pill bg-danger
          text-white position-absolute" v-if="this.newNum > 0">{{ newNum }}
          </div>
        </li>
        <li class="nav-item position-relative">
          <router-link to="/cart" class="nav-link" @click="closeNav">
            <i class="bi bi-cart-fill"></i>
          </router-link>
          <div v-if="cart.carts">
            <div class="rounded-pill bg-danger
            text-white position-absolute"
            v-if="this.cart.carts.length > 0">{{ cart.carts.length }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
import emitter from '../assets/javascript/emitter';

const storageMethods = {
  get() {
    return JSON.parse(localStorage.getItem('hexFavorite'));
  },
};

export default {
  data() {
    return {
      cart: {},
      myFavorite: storageMethods.get() || [],
      newNum: 0,
      toggleNav: false,
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    getmyFavorite() {
      this.newNum = this.myFavorite.length;
    },
    openNav() {
      // this.toggleNav = !this.toggleNav;
      this.toggleNav = true;
    },
    closeNav() {
      this.toggleNav = false;
    },
  },
  mounted() {
    this.getCart();
    this.getmyFavorite();
    emitter.on('update-cart', () => {
      this.getCart();
    });
    emitter.on('favorite-num', (num) => {
      this.getmyFavorite();
      this.newNum = num;
    });
  },
  unmounted() {
    emitter.off('update-cart', () => {
      this.getcart();
    });
    emitter.off('favorite-num', (num) => {
      this.getmyFavorite();
      this.newNum = num;
    });
  },
};
</script>
<style lang="scss">
  .navbar-collapse{
    transition: 0.3s ease-in-out;
  }
  .navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 #ccc;
  }
  .navbar-dark .navbar-nav .router-link-active:focus {
    color: #fff;
  }
  .fs-7 {
    font-size: 1.2rem;
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
  #nav .position-absolute {
    top: 1px;
    right: -5px;
    width: 20px;
    font-size: 0.5rem;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    #nav .position-absolute {
      top: 0;
      left: 12px;
    }
  }
  @media screen and (max-width: 767px) {
    #nav .position-absolute {
      top: 0;
      left: 12px;
    }
  }
</style>
