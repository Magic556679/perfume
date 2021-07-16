<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="container mt-5">
    <div class="row align-items-center mb-5">
            <div class="col-md-7">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="product.imageUrl" class="d-block w-100" alt="...">
                </div>
                </div>
            </div>
            </div>
            <div class="col-md-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white px-0 mb-0 py-3">
                <li class="breadcrumb-item">
                    <router-link to="/" class="text-pink">首頁</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/Products" class="text-pink">商品</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
                </ol>
            </nav>
            <h2 class="fw-bold h1 mb-3">{{ product.title }}</h2>
            <p>{{ product.content }}</p>
            <p>{{ product.description }}</p>
            <p class="mb-0 text-muted"><del>NT${{ product.origin_price }}</del></p>
            <p class="h4 fw-bold ">NT${{ product.price }}</p>
            <div class="row align-items-center">
                <div class="col-6">
                <div class="input-group my-3 bg-secondary rounded">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-dark border-0 py-2" type="button"
                        @click="addNum">
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                    <input type="text" class="form-control border-0 text-center
                    my-auto shadow-none bg-light"
                    placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1" v-model="qty">
                    <div class="input-group-append">
                      <button class="btn btn-outline-dark border-0 py-2" type="button"
                      @click="cutNum">
                          <i class="bi bi-dash-lg"></i>
                      </button>
                    </div>
                </div>
                </div>
                <div class="col-6">
                <button type="button" class="btn btn-dark btn-pink round-0 py-2"
                @click="addToCart">加入購物車</button>
                </div>
            </div>
            </div>
    </div>
    <button type="button" class="btn btn-dark btn-pink round-0 py-2 mb-5">
        <router-link to="/Products" class="text-white" >來去逛逛</router-link>
    </button>
    <div class="row mb-5">
        <div class="col-12">
            <swiper
            :space-between="50"
            :loop="true"
            :autoplay='
            {
                "delay": 2000,
                "disableOnInteraction": false,
            }'
            :breakpoints="swiperOptions.breakpoints">
        <swiper-slide v-for="image in productsAll" :key="image">
            <img :src="image.imageUrl">
            <div class="px-5">
                <h3 style="white-space:nowrap;">{{ image.title }}</h3>
                <h4>NT${{  $toCurrency(image.price) }}</h4>
            </div>
        </swiper-slide>
    </swiper>
        </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/swiper.scss';
import emitter from '../assets/javascript/emitter';

SwiperCore.use([Autoplay]);
export default {
  data() {
    return {
      product: {},
      productsAll: {},
      id: '',
      qty: 1,
      isLoading: false,
      swiperOptions: {
        breakpoints: {
          767: {
            slidesPerView: 3,
            paceBetween: 50,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.product = res.data.product;
        this.isLoading = false;
      });
    },
    getProductsAll() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.productsAll = res.data.products;
      });
    },
    addToCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.product.id,
        qty: this.qty,
      };
      this.$http.post(url, { data: cart }).then(() => {
        emitter.emit('update-cart');
      });
    },
    addNum() {
      this.qty += 1;
    },
    cutNum() {
      if (this.qty > 1) {
        this.qty -= 1;
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
    this.getProductsAll();
  },
};
</script>
<style lang="scss">
  a {
    text-decoration: none;
  }
  img {
    height: 80vh;
    object-fit: contain;
  }
  .swiper-slide  {
    display: flex;
    img {
      height: 40vh;
    }
  }
  @media screen and (max-width: 767px) {
    .swiper-slide  {
    display: flex;
      img {
        height: 200px;
      }
    }
  }
</style>
