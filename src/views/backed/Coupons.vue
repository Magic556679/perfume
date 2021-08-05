<template>
  <Loading :active="isLoading" :z-index="1060">
      <div class="loadingio-spinner-spin-rvvfjvnp9z"><div class="ldio-hqeuxluc1v">
        <div><div></div></div><div><div></div></div><div><div></div></div><div>
        <div></div></div><div><div></div></div><div><div></div></div><div><div>
        </div></div><div><div></div></div>
        </div>
      </div>
  </Loading>
  <div class="text-end mt-4">
    <button
      type="button"
      class="btn btn-primary"
      @click="openCouponModal(true)"
    >
      建立新的優惠券
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openCouponModal(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDelCouponModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <CouponModal
    :coupon="tempCoupon"
    :is-new="isNew"
    ref="couponModal"
    @update-coupon="updateCoupon"
  />
  <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
</template>
<script>
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
  },
  components: {
    CouponModal,
    DelModal,
  },
  methods: {
    getCoupons() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`;
      this.$http.get(url, this.tempProduct).then((res) => {
        this.coupons = res.data.coupons;
        this.isLoading = false;
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    // Modal
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: Math.floor(new Date().getTime() / 1000),
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    // 刪除Ｍodal
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    updateCoupon(tempCoupon) {
      this.isLoading = true;
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon }).then(() => {
          this.isLoading = false;
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        }).catch(() => {
          this.$swal({
            title: '資料取得失敗',
            icon: 'error',
          });
          this.loadingStatus = false;
        });
      } else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(url, { data: this.tempCoupon }).then(() => {
          this.isLoading = false;
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        }).catch(() => {
          this.$swal({
            title: '資料取得失敗',
            icon: 'error',
          });
          this.loadingStatus = false;
        });
      }
    },
    delCoupon() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url).then(() => {
        this.isLoading = false;
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getCoupons();
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
    this.getCoupons();
  },
};
</script>
