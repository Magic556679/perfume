<template>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="container min mt-5" v-if="cart.carts">
        <div class="row justify-content-center" v-if="cart.carts.length > 0">
            <div class="col-md-8">
                <div class="d-flex justify-content-between">
                  <button type="button" class="
                  btn-pink rounded py-2 shadow-none" style="border:none"
                  @click="$router.push('/products')">繼續購物</button>
                  <button type="button" class="
                  btn-pink rounded py-2 shadow-none" style="border:none"
                  @click="$router.push('/order')">填寫訂單</button>
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
                            <!-- <div class="text-success" v-if="item.coupon">
                            已套用優惠券
                            </div> -->
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
                              aria-describedby="button-addon1" v-model="item.qty" disabled="value">
                              <div class="input-group-append">
                                <button class="btn btn-outline-dark border-0 py-2" type="button"
                                @click="upDateCart(item.id, item.qty-1)" :disabled="item.qty === 1">
                                    <i class="bi bi-dash-lg"></i>
                                </button>
                              </div>
                            </div>
                        </td>
                        <td class="">
                            <!-- <small
                            v-if="cart.final_total !== cart.total"
                            class="text-success"
                            >折扣價：</small
                            > -->
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
                <!-- <div class="input-group input-group-sm">
                    <button type="button" class="btn btn-dark btn-pink
                    round-0"
                    @click="addToCart(product.id)">套用優惠券</button>
                    <input type="text" class="form-control border-0 text-center
                            my-auto shadow-none bg-secondary"
                            placeholder="" aria-label="Example text
                            with button addon"
                            aria-describedby="button-addon1">
                </div> -->
                 <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="input-group-text btn-pink" id="btnGroupAddon2"
                        @click="coupon()">套用優惠券</button>
                    </div>
                        <input type="text" class="form-control" placeholder="輸入優惠卷"
                        aria-label="Input group example" aria-describedby="btnGroupAddon2"
                        v-model="couponNum.code">
                 </div>
            </div>
        </div>
        <div v-else class="row d-flex align-items-center justify-content-center">
          <div class="col-md-8 text-center">
            <h2>購物車沒有商品</h2>
            <button type="button" class="
            btn-pink rounded py-2 px-3 shadow-none mt-5"
            style="border:none" @click="$router.push('/products')">前往購物</button>
          </div>
        </div>
    </div>
</template>
<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      cart: {},
      isLoading: false,
      couponNum: {
        // code: 'PerfumeOff',
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
      });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then((res) => {
        emitter.emit('update-cart');
        console.log(res);
        this.getCarts();
        this.isLoading = false;
      });
    },
    upDateCart(id, qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.getCarts();
      });
    },
    coupon() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(url, { data: this.couponNum }).then((res) => {
        console.log(res);
        this.getCarts();
      });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
<style lang="scss">
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
