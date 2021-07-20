<template>
    <div class="position-relative d-flex">
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <div class="row my-auto pb-7">
          <div class="col-md-4 d-flex flex-column">
            <div class="my-auto">
              <h2><i class="bi bi-check-circle-fill"></i> 付款成功</h2>
              <p class="mt-3">感謝您的訂購，商品會在三到五天的時間送達，請留意手機訊息。</p>
              <!-- <bttton class="btn btn-pink mt-4 px-5">繼續購物</bttton> -->
              <button type="button" class="
              btn-pink rounded py-2 px-2 shadow-none mt-3"
              style="border:none" @click="$router.push('/products')">繼續購物</button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-md-50 w-100 position-absolute opacity-1" style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://i.imgur.com/nF20TU6.jpg);
      background-position: center center; background-size: cover;">
      </div>
    </div>
</template>
<style lang="scss">
    @media (min-width: 768px) {
        .w-md-50 {
             width: 50% !important;
        }
    }
</style>
