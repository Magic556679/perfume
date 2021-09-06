<template>
    <Loading :active="isLoading" :z-index="1060">
      <div class="loadingio-spinner-spin-rvvfjvnp9z"><div class="ldio-hqeuxluc1v">
        <div><div></div></div><div><div></div></div><div><div></div></div><div>
        <div></div></div><div><div></div></div><div><div></div></div><div><div>
        </div></div><div><div></div></div>
        </div>
      </div>
    </Loading>
    <div id="carts">
      <header>
          <div class="container h-100">
            <div class="row align-items-center justify-content-center h-100">
              <div class="col-md-6 col-12">
                <div class="headerTitle">
                  <h1 class="text-center">購物車</h1>
                </div>
              </div>
            </div>
          </div>
      </header>
      <div class="container min mt-5" v-if="cart.carts">
          <div class="row justify-content-center" v-if="cart.carts.length > 0">
              <div class="col-md-8">
                  <div class="input-group">
                      <div class="input-group-prepend">
                          <button class="input-group-text btn-pink" id="btnGroupAddon2"
                          @click="coupon()">套用優惠券</button>
                      </div>
                          <input type="text" class="form-control" placeholder="輸入優惠卷"
                          aria-label="Input group example" aria-describedby="btnGroupAddon2"
                          v-model="couponNum.code">
                  </div>
                  <table class="table align-middle text-center mt-5">
                      <thead>
                      <tr>
                          <th class="d-none d-lg-table-cell"></th>
                          <th>品名</th>
                          <th width="130px">數量</th>
                          <th>金額</th>
                          <th>刪除</th>
                      </tr>
                      </thead>
                      <tbody>
                      <template v-if="cart.carts">
                          <tr v-for="item in cart.carts" :key="item.id">
                          <td class="d-none d-lg-table-cell">
                              <img :src="item.product.imageUrl">
                          </td>
                          <td>
                              {{ item.product.title }}
                          </td>
                          <td>
                              <div class="input-group my-3 bg-secondary rounded">
                                <div class="input-group-prepend">
                                  <button class="btn btn-outline-dark border-0 py-2" type="button"
                                    @click="upDateCart(item.id, item.qty+1)">
                                    <i class="bi bi-plus-lg"></i>
                                  </button>
                                </div>
                                <input type="text" class="form-control border-0 text-center
                                my-auto shadow-none bg-light"
                                placeholder="" aria-label="Example text with button addon"
                                aria-describedby="button-addon1"
                                v-model="item.qty" disabled="value">
                                <div class="input-group-append">
                                  <button class="btn btn-outline-dark border-0 py-2"
                                  type="button"
                                  @click="upDateCart(item.id, item.qty-1)"
                                  :disabled="item.qty === 1">
                                      <i class="bi bi-dash-lg"></i>
                                  </button>
                                </div>
                              </div>
                          </td>
                          <td>
                              NT${{ $toCurrency(item.final_total)}}
                          </td>
                          <td>
                              <button
                              type="button"
                              class="btn btn-outline-danger btn-sm"
                              @click="removeCartItem(item.id)"
                              >
                              <i class="bi bi-trash"></i>
                              </button>
                          </td>
                          </tr>
                      </template>
                      </tbody>
                          <tr>
                              <td colspan="3" class="text-end">總計</td>
                              <td class="d-none d-lg-table-cell"></td>
                              <td class="text-end">$NT{{ $toCurrency(cart.total) }}</td>
                          </tr>
                          <tr v-if="cart.final_total !== cart.total">
                              <td colspan="3" class="text-end text-success">折扣價</td>
                              <td class="d-none d-lg-table-cell"></td>
                              <td class="text-end
                              text-success">$NT{{ $toCurrency(cart.final_total) }}</td>
                          </tr>
                  </table>
                  <div class="d-flex justify-content-between pt-5">
                    <button type="button" class="
                    btn-pink rounded py-2 shadow-none" style="border:none"
                    @click="$router.push('/products')">繼續購物</button>
                    <button type="button" class="
                    btn-pink rounded py-2 shadow-none" style="border:none"
                    @click="$router.push('/order')">填寫訂單</button>
                  </div>
              </div>
          </div>
          <div v-else class="row d-flex align-items-center justify-content-center">
            <div class="col-md-8 text-center">
              <h2>購物車無商品</h2>
              <button type="button" class="
              btn-pink rounded py-2 px-3 shadow-none mt-5"
              style="border:none" @click="$router.push('/products')">前往購物</button>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import emitter from '../../assets/javascript/emitter';

export default {
  data() {
    return {
      cart: {},
      isLoading: false,
      couponNum: {
        code: '',
      },
    };
  },
  methods: {
    getCarts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        this.cart = res.data.data;
        this.isLoading = false;
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then(() => {
        emitter.emit('update-cart');
        this.getCarts();
        this.isLoading = false;
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    upDateCart(id, qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.put(url, { data: cart }).then(() => {
        this.getCarts();
      });
    },
    coupon() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(url, { data: this.couponNum }).then((res) => {
        if (res.data.success) {
          this.$swal({
            title: res.data.message,
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          this.$swal({
            title: res.data.message,
            text: '請至首頁領取',
            icon: 'error',
            showConfirmButton: true,
            timer: 10000,
          });
        }
        this.getCarts();
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
<style lang="scss">
  #carts header{
      background-image: url('https://i.imgur.com/azBaFHU.jpg');
      background-position: 50% 80%;
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
  table img {
    height: 25vh;
    width: 10vw;
    object-fit: cover;
  }
  .min {
    min-height: 500px;
  }
  @media screen and (max-width:768px) {
    .min {
    min-height: 768px;
    }
  }
  @media screen and (max-width:767px) {
    .min {
    min-height: 600px;
    }
  }
</style>
