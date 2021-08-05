<template>
  <div class="container-fluid footer" style="background-color: #000;">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div class="mt-3">
          <p>© 2021 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .footer {
    margin-top: 6rem;
    color: #fff;
    position: relative;
    border-bottom: 10px solid #a43060;
    white-space: nowrap;
    z-index: 10;
    &::before {
      content: "";
      position: absolute;
      top: -60px;
      left: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 60px 100vw;
      border-color: transparent transparent #000000 transparent;
      z-index: 20;
    }
  }
</style>
