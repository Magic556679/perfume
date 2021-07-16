<template>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 col-lg-3">
                <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action"
                @click.prevent="selectCategory = item">全部商品</a>
                <a  href="#"
                    v-for="item in categories"
                    :key="item"
                    class="list-group-item list-group-item-action"
                    @click.prevent="selectCategory = item"
                    >{{ item }}</a
                >
                </div>
            </div>
            <div class="col-12 col-lg-9">
              <div class="row">
                <div class="col-md-3" v-for="product in filterProducts" :key="product.id">
                    <div class="card border-0 mb-4 position-relative position-relative">
                        <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." />
                        <a href="#" class="text-dark">
                            <i class="far fa-heart position-absolute"
                            style="right: 16px; top: 16px"></i>
                        </a>
                        <div class="card-body p-0">
                            <h4 class="mb-0 mt-3 text-dark">{{ product.title }}</h4>
                            <!-- <p class="card-text text-muted mb-0">{{ product.content }}</p> -->
                            <p class="text-muted mt-3">NT$ {{ $toCurrency(product.price) }}</p>
                            <div class="d-flex justify-content-between">
                              <button type="button" class="btn btn-dark btn-pink
                              round-0 py-2"
                            @click="addToCart(product.id)">加入購物車</button>
                            <!-- <button type="button" class="btn btn-secondary round-0 py-2">
                                <router-link :to="`/product/${product.id}`"
                                style="text-decoration:none">查看更多</router-link>
                            </button> -->
                                <router-link :to="`/product/${product.id}`"
                                style="text-decoration:none"><button type="button"
                                class="btn btn-secondary round-0 py-2">查看更多</button>
                                </router-link>
                            </div>
                            <!-- <button
                            type="button"
                            @click="addMyFavorite(product)"
                            :class="{ active: myFavorite.includes(product.id) }"
                            class="btn d-block btn-outline-success"
                            >
                            加到我的最愛
                            </button> -->
                        </div>
                    </div>
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
      products: [],
      product: {},
      categories: [],
      selectCategory: '',
      currentPage: 1,
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.getCategories();
        this.isLoading = false;
        console.log(res);
      });
    },
    getCategories() {
      const categories = new Set();
      this.products.forEach((item) => {
        categories.add(item.category);
      });
      this.categories = [...categories];
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        emitter.emit('update-cart');
        console.log(res);
      });
    },
  },
  computed: {
    filterProducts() {
      return this.products.filter((item) => item.category.match(this.selectCategory));
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
a {
  color: #000;
}
.card img {
  height: 300px;
  object-fit: cover;
}

</style>
