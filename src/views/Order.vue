<template>
<div class="container">
    <!-- <Loading :active="isLoading" :z-index="1060"></Loading> -->
    <Loading :active="isLoading" :z-index="1060">
      <div class="loadingio-spinner-spin-rvvfjvnp9z"><div class="ldio-hqeuxluc1v">
        <div><div></div></div><div><div></div></div><div><div></div></div><div>
        <div></div></div><div><div></div></div><div><div></div></div><div><div>
        </div></div><div><div></div></div>
        </div>
      </div>
    </Loading>
    <div class="my-5 row justify-content-center">
        <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
          <div class="d-flex justify-content-between">
            <button type="button" class="
            btn-pink rounded py-2 shadow-none" style="border:none">繼續購物</button>
            <!-- <button type="submit" class="
            btn-pink rounded py-2 shadow-none" style="border:none"
            @click="$router.push('/check')">送出訂單</button> -->
            <button type="submit" class="
            btn-pink rounded py-2 shadow-none" style="border:none">送出訂單</button>
          </div>
          <p class="text-danger mb-2 mt-5">*為必填欄位</p>
          <div class="mb-3">
            <label for="email" class="form-label">Email<span
            class="text-danger ms-1">*</span></label>
            <Field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名<span
            class="text-danger ms-1">*</span></label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話<span
            class="text-danger ms-1">*</span></label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|min:8|max:10|numeric"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址<span
            class="text-danger ms-1">*</span></label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
              <label for="payment" class="form-label"
                >付款方式<span class="text-danger ms-1">*</span></label
              >
              <Field
                as="select"
                id="payment"
                v-model="form.user.payment"
                name="付款方式"
                class="form-select"
                :class="{ 'is-invalid': errors['付款方式'] }"
                rules="required"
              >
                <option value="" disabled>請選擇付款方式</option>
                <option value="信用卡">信用卡</option>
                <option value="貨到付款">貨到付款</option>
                <option value="ATM 轉帳">ATM 轉帳</option>
              </Field>
              <Message name="付款方式" class="invalid-feedback"></Message>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              name=""
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <!-- <div class="text-end">
            <button type="submit" class="btn btn-pink ">送出訂單</button>
          </div> -->
        </Form>
      </div>
</div>
</template>
<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          payment: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then(() => {
        this.$refs.form.resetForm();
        emitter.emit('update-cart');
        this.isLoading = false;
        this.$router.push('/check');
      });
    },
  },
};
</script>
