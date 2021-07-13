<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-pink">
  <div class="container-fluid">
    <a class="navbar-brand logoFont" href="#">
      <router-link to="/" class="nav-link">Perfume</router-link></a>
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex justify-content-end" id="navbarNav" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/Products" class="nav-link">商品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Products/test1" class="nav-link">關於我們</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Products/test2" class="nav-link">優惠卷</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/coupons" class="nav-link">
          <i class="bi bi-cart-fill"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style lang="scss">
  .navbar-dark .navbar-nav .router-link-active:focus {
    color: #fff;
  }
  .navbar-dark .navbar-nav .router-link-active {
    color: #fff;
  }
  .logoFont {
    font-family: "Arial Black",sans-serif;
  }
  a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
</style>
