<template>
    <Loading :active="isLoading" :z-index="1060">
      <div class="loadingio-spinner-spin-rvvfjvnp9z"><div class="ldio-hqeuxluc1v">
        <div><div></div></div><div><div></div></div><div><div></div></div><div>
        <div></div></div><div><div></div></div><div><div></div></div><div><div>
        </div></div><div><div></div></div>
        </div>
      </div>
     </Loading>
    <div class="container mt-5" id="check">
      <StepItem :step="step"></StepItem>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <div class="text-center">
                <h2>訂購人資訊</h2>
            </div>
            <table class="mx-auto" style="border:1px solid red">
                <tbody>
                    <tr>
                        <th scope="row" width="30%" class="px-4">收件人姓名：</th>
                        <td width="70%" height="75px" class="px-4">
                        {{ user.user?.name }}
                        </td>
                     </tr>
                    <tr>
                        <th scope="row" class="px-4">收件人電話：</th>
                        <td height="75px" class="px-4">
                        {{ user.user?.tel }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="px-4">收件人地址 ：</th>
                        <td height="75px" class="px-4">
                        {{ user.user?.address }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="px-4">電子郵件 ：</th>
                        <td height="75px" class="px-4">
                        {{ user.user?.email }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="px-4">訂購日期 ：</th>
                        <td height="75px" class="px-4">
                        {{
                            new Date(user.create_at * 1000)
                            .toLocaleString()
                            .split(' ')[0]
                        }}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="px-4">付款狀態 ：</th>
                        <td  height="75px" class="px-4">
                            <span class="text-danger" v-if="!user.is_paid">未付款</span>
                            <span class="text-success" v-else>已付款</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center mt-5">
                <h2>購物清單</h2>
            </div>
            <table class="mx-auto">
                <thead>
                    <tr>
                        <th scope="row" height="75px" width="25%" class="px-4">品項：</th>
                        <th scope="row" height="75px" width="25%" class="px-4">數量：</th>
                        <th scope="row" height="75px" width="25%" class="px-4">金額：</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id">
                        <th scope="row" style="70%" height="75px" class="px-4">
                        {{ item.product.title }}
                        </th>
                        <td  style="30%" height="75px" class="px-4">x{{ item.qty }}</td>
                        <td height="75px" class="px-4">
                        NT${{ Math.floor(item.final_total).toLocaleString() }}
                        </td>
                     </tr>
                     <tr>
                         <th height="75px" class="px-4">總金額</th>
                        <td  colspan="2"  height="75px" class="px-4">
                            NT${{ user.total  }}
                        </td>
                     </tr>
                </tbody>
            </table>
            <div class="mt-5 mb-5 text-center">
                <button type="button" class="
                 btn-pink rounded py-2 shadow-none"
                 style="border:none" @click="pay()">確認付款</button>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import StepItem from '@/components/StepItem.vue';

export default {
  data() {
    return {
      step: 3,
      products: [],
      user: {},
      price: '',
      isLoading: false,
    };
  },
  components: {
    StepItem,
  },
  methods: {
    getOrders() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/orders?page=1`;
      this.isLoading = true;
      this.axios.get(url).then((res) => {
        [this.user] = res.data.orders;
        this.products = Object.values(this.user.products);
        this.isLoading = false;
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    pay() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.user.id}`;
      this.axios.post(url).then(() => {
        this.$router.push('/payment');
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
    this.getOrders();
  },
};
</script>
<style lang="scss" scoped>
  table img {
    height: 25vh;
    width: 10vw;
    object-fit: cover;
  }
  #check {
    table {
      width: 100%;
        td {
            border: 1px solid rgb(62, 57, 57);
        }
        th {
            border: 1px solid rgb(62, 57, 57);
        }
    }
  }
</style>
