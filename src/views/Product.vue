<template>
  <div class="container mt-5">
    <div class="row align-items-center">
            <div class="col-md-7">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="product.imageUrl" class="d-block w-100" alt="...">
                </div>
                <!-- <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
                </div> -->
                </div>
                <!-- <a class="carousel-control-prev" href="#carouselExampleControls"
                role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls"
                role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a> -->
            </div>
            </div>
            <div class="col-md-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white px-0 mb-0 py-3">
                <li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li>
                <li class="breadcrumb-item"><a class="text-muted"
                href="./product.html">Product</a></li>
                <li class="breadcrumb-item active" aria-current="page">Detail</li>
                </ol>
            </nav>
            <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
            <p class="mb-0 text-muted text-end"><del>NT$1,200</del></p>
            <p class="h4 fw-bold text-end">NT$1,080</p>
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
                <!-- <a href="./checkout.html"
                class="text-nowrap btn btn-dark w-100 py-2">Lorem ipsum</a> -->
                <button type="button" class="btn btn-dark btn-pink round-0 py-3"
                @click="addToCart">加入購物車</button>
                </div>
            </div>
            </div>
    </div>
    <div class="row my-5">
        <div class="col-md-4">
            <p>Lorem ipsum dolet</p>
        </div>
        <div class="col-md-3">
        <p class="text-muted">Lorem</p>
    </div>
    </div>
    <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
    <div class="swiper-container mt-4 mb-5">
      <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
                <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
                <a href="#" class="text-dark">
                </a>
                <div class="card-body p-0">
                    <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                    <p class="card-text mb-0">NT$1,080 <span class="text-muted ">
                        <del>NT$1,200</del></span></p>
                    <p class="text-muted mt-3"></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      product: {},
      id: '',
      qty: 1,
    };
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url).then((res) => {
        // console.log(res);
        this.product = res.data.product;
        // this.isLoading = false;
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
        console.log(res);
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
    // console.log(this.$route);
    this.id = this.$route.params.id;
    this.getProduct();
    console.log(this.qty);
  },
};
</script>
<style lang="scss">
  img {
    // height: 400px;
    // height: 100vh;
    object-fit: contain;
    // object-position: 50% 50%;
    // width: 100%;
    // height: 50%;
  }
</style>
