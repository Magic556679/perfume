<template>
  <Loading :active="isLoading" :z-index="1060">
    <div class="loadingio-spinner-spin-rvvfjvnp9z"><div class="ldio-hqeuxluc1v">
      <div><div></div></div><div><div></div></div><div><div></div></div><div>
      <div></div></div><div><div></div></div><div><div></div></div><div><div>
      </div></div><div><div></div></div>
      </div>
    </div>
  </Loading>
  <header>
  <div class="container h-100">
    <div class="row align-items-center justify-content-center h-100">
      <div class="col-md-6 col-12">
        <div class="headerTitle">
          <h1 class="text-center">商品</h1>
        </div>
      </div>
    </div>
  </div>
  </header>
    <div class="container min mt-5" id="products">
        <div class="row">
            <div class="col-12 col-lg-3 pb-5 pb-lg-1">
                <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action"
                :class="{listActive: selectCategory == ''|| selectCategory == undefined}"
                @click.prevent="selectCategory = item"
                >全部商品</a>
                <a  href="#"
                    v-for="item in categories"
                    :key="item"
                    class="list-group-item list-group-item-action"
                    :class="{listActive: selectCategory == item}"
                    @click.prevent="selectCategory = item"
                    >{{ item }}</a
                >
                </div>
            </div>
            <div class="col-12 col-lg-9">
              <div class="row">
                <div class="col-md-3" v-for="product in filterProducts" :key="product.id">
                    <div class="card border-0 mb-4 position-relative">
                      <router-link :to="`/product/${product.id}`">
                        <div class="hoverImg rounded">
                          <img :src="product.imageUrl"
                          class="card-img-top rounded-0 hoverImg-0"  />
                        </div>
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
                        </div>
                      </router-link>
                        <div class="d-flex">
                          <button type="button" class="btn btn-dark btn-pink
                            round-0 py-2"
                            @click="addToCart(product.id)">加入購物車</button>
                            <router-link :to="`/product/${product.id}`"
                            style="text-decoration:none;margin-left: 10px;">
                            <button type="button"
                            class="btn btn-secondary round-0 py-2">查看更多</button>
                            </router-link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import emitter from '@/assets/javascript/emitter';

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
      product: {},
      categories: [],
      selectCategory: '',
      currentPage: 1,
      isLoading: false,
      myFavorite: storageMethods.get() || [],
      FavoriteNum: 0,
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
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    getCategories() {
      const categories = new Set(); //  new Set() array 元素不重複
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
        this.$swal(res.data.message);
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    addMyFavorite(item) {
      if (this.myFavorite.includes(item.id)) {
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
        this.$swal({
          title: '已從我的最愛移除',
          icon: 'error',
        });
      } else {
        this.myFavorite.push(item.id);
        this.$swal({
          title: '已加入我的最愛',
          icon: 'success',
        });
      }
      storageMethods.save(this.myFavorite);
      this.FavoriteNum = this.myFavorite.length;
      emitter.emit('favorite-num', this.FavoriteNum);
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
<style lang="scss" scoped>
a {
  color: #000;
}
header {
    background-image: url('https://i.imgur.com/GiMm870.jpg');
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    .headerTitle {
      padding: 30px;
      background: rgba(219, 212, 212, 0.5);
    }
    h1 {
    color: #000;
  }
}
.card {
  img {
    height: 300px;
    object-fit: cover;
  }
  a {
    text-decoration:none;
  }
  .hoverImg {
    position: relative;
    overflow: hidden;
    .hoverImg-0 {
      transition: transform 1s ease;
    }
  }
  .hoverImg:hover .hoverImg-0 {
    transform: scale(1.4);
  }
}
.min {
  min-height: 500px;
}
#products {
  .active {
    color: #ec0867 !important;
  }
  .listActive {
    background-color: #a43060;
    border-color: #a43060;
    color: #fff;
  }
  .bi-suit-heart-fill {
    color: #fff;
  }
}
</style>
