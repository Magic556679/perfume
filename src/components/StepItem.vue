<template>
<div>
  <ul class="setp list-unstyled d-flex justify-content-center mt-5">
      <li class="d-flex flex-column align-items-center py-2 px-4">
          <p class="little rounded-circle text-center" :class="{'active': step >= 1}">1</p>
          確認資料
      </li>
      <li class="setp-border d-flex flex-column align-items-center py-2 px-4"
        :class="{'setp-border-two': step >= 2, 'setp-border-three': step >= 3 }">
          <p class="little rounded-circle text-center" :class="{'active': step >= 2}">2</p>
          填寫資料
      </li>
      <li class="d-flex flex-column align-items-center py-2 px-4">
          <p class="little rounded-circle text-center" :class="{'active': step >= 3}">3</p>
          確認付款
      </li>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ['step'],
};
</script>
<style lang="scss" scoped>
  .setp {
    li {
      p {
        background-color: #ccc;
        width: 40px;
        height: 40px;
        line-height: 40px;
        color:#ffffff;
      }
      .active {
        background-color: #a43060;
      }
    }
    .setp-border {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: -50%;
        bottom: 70%;
        height: 2px;
        width: 100%;
        background: #ccc;
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        right: -50%;
        bottom: 70%;
        height: 2px;
        width: 100%;
        background: #ccc;
        z-index: -1;
      }
    }
    .setp-border-two {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: -50%;
        bottom: 70%;
        height: 2px;
        width: 100%;
        background: #a43060;
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        right: -50%;
        bottom: 70%;
        height: 2px;
        width: 100%;
        background: #ccc;
        z-index: -1;
      }
    }
    .setp-border-three {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: -50%;
        bottom: 70%;
        height: 2px;
        width: 100%;
        background: #a43060;
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        right: -50%;
        bottom: 70%;
        height: 2px;
        width: 100%;
        background: #a43060;
        z-index: -1;
      }
    }
  }
</style>
