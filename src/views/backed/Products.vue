<template>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price }}
          </td>
          <td class="text-right">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelProductModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getProducts" />
    <!-- ProductModal -->
    <ProductModal
      @update-product="updateProduct"
      :product="tempProduct"
      :isNew="isNew"
      ref="productModal"
    />
    <!-- DelModal -->
    <DelModal :product="tempProduct" ref="delModal" @del-item="delProduct" />
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imagesUrl: [],
      },
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
      modal: {
        editModal: '',
        delModal: '',
      },
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    ProductModal,
    DelModal,
  },
  methods: {
    getProducts(page = 1) {
      this.currentPage = page;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        }
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      const productComponent = this.$refs.productModal;
      productComponent.openModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        if (response.data.success) {
          productComponent.hideModal();
          this.getProducts(this.currentPage);
        }
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        if (response.data.success) {
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.getProducts(this.currentPage);
        }
      }).catch(() => {
        this.$swal({
          title: '資料取得失敗',
          icon: 'error',
        });
        this.loadingStatus = false;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
