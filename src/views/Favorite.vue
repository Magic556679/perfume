<template>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div>
        <div class="container min mt-5" id="favorite">
            <div class="row" v-if="this.myFavorite.length > 0">
                <div class="col-md-3" v-for="product in filterProducts" :key="product.id">
                    <div class="card border-0 mb-4 position-relative">
                        <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." />
                        <a href="#" class="text-dark position-absolute"
                            style="right: 20px; top: 8px;font-size: 2rem;"
                            @click.prevent="addMyFavorite(product)">
                            <i class="bi bi-suit-heart-fill"
                              :class="{ active: myFavorite.includes(product.id)}"
                            >
                            </i>
                        </a>
                        <div class="card-body p-0">
                            <h4 class="mb-0 mt-3 text-dark">{{ product.title }}</h4>
                            <p class="text-muted mt-3">NT$ {{ $toCurrency(product.price) }}</p>
                            <div class="d-flex justify-content-between">
                              <button type="button" class="btn btn-dark btn-pink
                                round-0 py-2"
                                @click="addToCart(product.id)">加入購物車</button>
                                <router-link :to="`/product/${product.id}`"
                                style="text-decoration:none"><button type="button"
                                class="btn btn-secondary round-0 py-2">查看更多</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="row d-flex align-items-center justify-content-center">
                <div class="col-md-8 text-center">
                    <h2>我的最愛無商品</h2>
                    <button type="button" class="
                    btn-pink rounded py-2 px-3 shadow-none mt-5"
                    style="border:none" @click="$router.push('/products')">前往購物</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import emitter from '../assets/javascript/emitter';

const storageMethods = {
  save(favorite) {
    const favoriteString = JSON.stringify(favorite);
    localStorage.setItem('hexFavorite', favoriteString);
  },
  get() {
    return JSON.parse(localStorage.getItem('hexFavorite'));
  },
};

export default {
  data() {
    return {
      products: [],
      myFavorite: storageMethods.get() || [],
      // localNum: '',
      // Favorite: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        // const localtest = JSON.parse(localStorage.getItem('hexFavorite'));
        this.products = res.data.products;
        this.isLoading = false;
        // localtest.forEach((num) => {
        //   const test = this.products.filter((item) => item.id === num);
        //   this.Favorite.push(test);
        //   this.array = [...this.Favorite];
        // });
      });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        emitter.emit('update-cart');
        this.$swal(res.data.message);
      });
    },
    addMyFavorite(item) {
      // this.myFavorite.push(item.id);
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        // emitter.emit('favorite-num', JSON.parse(localStorage.getItem('hexFavorite')));
      } else {
        this.myFavorite.push(item.id);
      }
      storageMethods.save(this.myFavorite);
      this.FavoriteNum = this.myFavorite.length;
      emitter.emit('favorite-num', this.FavoriteNum);
    },
  },
  computed: {
    filterProducts() {
      const arr = [];
      this.products.forEach((item) => {
        if (this.myFavorite.includes(item.id)) {
          arr.push(item);
        }
      });
      return arr;
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
.card img {
  height: 300px;
  object-fit: cover;
}
#favorite .active {
color: red !important;
}
#favorite .bi-suit-heart-fill {
  color: #fff;
}
</style>
