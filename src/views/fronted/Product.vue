<template>
  <Loading :active="isLoading" :z-index="1060">
      <div class="loadingio-spinner-spin-rvvfjvnp9z"><div class="ldio-hqeuxluc1v">
        <div><div></div></div><div><div></div></div><div><div></div></div><div>
        <div></div></div><div><div></div></div><div><div></div></div><div><div>
        </div></div><div><div></div></div>
        </div>
      </div>
  </Loading>
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
      <h2 class="fw-bold mb-3">{{ product.title }}</h2>
      <!-- <p>產品描述</p> -->
      <h3 class="fw-bold">產品說明</h3>
      <p>{{ product.content }}</p>
      <!-- <p>產品說明</p> -->
      <h3 class="fw-bold">靈感</h3>
      <p>{{ product.description }}</p>
      <p class="mb-0 text-muted"
      v-if="productMoney.product">
      <del>NT${{ $toCurrency(productMoney.product.origin_price) }}</del></p>
      <p class="h4 fw-bold"
      v-if="productMoney.product">NT${{ $toCurrency(productMoney.product.price) }}</p>
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
              aria-describedby="button-addon1" v-model="qty" disabled>
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
    <div class="row mb-5">
      <div class="col-12">
        <h2><i class="bi bi-question-circle-fill me-2" style="color:#a43060;"></i>常見問題</h2>
        <ul>
          <li>使用一段時間香味似乎有所不同？
             <p>隨著您使用香水，酒精會逐漸揮發並消散，
               此外，由於快將用完的香水經過熟成，色澤與香氣會較為濃郁。</p>
          </li>
          <li>平常該怎麼保存呢？
             <p>保存方式：如果您希望盡量享受原本的香味，請於使用後緊閉瓶蓋，
                並將之儲藏在室溫穩定的陰涼處，避免陽光直射。我們建議您在香水開封一年內用完。</p>
          </li>
          <li>久未使用的香水變了顏色，可以繼續使用嗎？
             <p>酒精隨著每次使用而減少，產品顏色會隨之變得越來越深，香味亦會變得越來越濃郁。
                如果您不介意香味有所改變，可以繼續使用產品。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mb-5">
        <div class="col-12">
            <h2><i class="bi bi-cart-fill me-2" style="color:#a43060;"></i>您可能喜歡</h2>
            <swiper
            :space-between="50"
            :loop="true"
            :autoplay='
            {
                "delay": 2000,
                "disableOnInteraction": false,
            }'
            :breakpoints="swiperOptions.breakpoints">
        <swiper-slide v-for="image in productsAll" :key="image" style="display: flex;">
              <router-link :to="`/product/${image.id}`"
                style="text-decoration:none">
                <img :src="image.imageUrl" @click="gotoPages()">
              </router-link>
            <div class="px-5">
                <h3 style="white-space:nowrap;">{{ image.title }}</h3>
                <h4>NT${{ $toCurrency(image.price) }}</h4>
                <router-link :to="`/product/${image.id}`"
                style="text-decoration:none;margin-left: 10px;">
                  <button type="button"
                  class="btn btn-secondary round-0 py-2 mt-3">
                  查看更多</button>
                </router-link>
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
import emitter from '../../assets/javascript/emitter';

SwiperCore.use([Autoplay]);
export default {
  data() {
    return {
      product: {},
      productMoney: {},
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
        this.id = this.$route.params.id;
        this.product = res.data.product;
        this.productMoney = res.data; //  解決千分號無法顯示
        this.isLoading = false;
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    getProductsAll() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.productsAll = res.data.products;
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    addToCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.product.id,
        qty: this.qty,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        emitter.emit('update-cart');
        this.$swal(res.data.message);
      }).catch(() => {
        this.$swal({
          title: '操作失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
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
    gotoPages() {
      this.id = this.$route.params.id;
    },
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.getProduct();
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
    this.getProductsAll();
  },
};
</script>
<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
  h3 {
    font-size: 1.2rem;
  }
  img {
    height: 80vh;
    object-fit: contain;
  }
  .swiper-slide  {
    img {
      height: 40vh;
    }
  }
  @media screen and (max-width: 767px) {
    .swiper-slide  {
      img {
        height: 200px;
      }
    }
  }
</style>
