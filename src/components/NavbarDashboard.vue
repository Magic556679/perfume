<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-pink">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Perfume</a>
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/admin/products" class="nav-link">產品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/orders" class="nav-link">訂單</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">優惠卷</a>
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
</style>
