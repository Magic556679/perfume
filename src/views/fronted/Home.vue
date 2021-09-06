<template>
<div>
  <header>
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div class="col-md-6 col-12">
          <div class="headerTitle">
            <h2>每次用香水，都像是赴一場約會。</h2>
            <h2>不需要任何裝飾，只需要幾滴香水。</h2>
          </div>
          <button type="button" class="
              btn-pink rounded py-2 px-3 shadow-none mt-5"
              style="border:none" @click="$router.push('/products')">前往購物</button>
        </div>
      </div>
      <div class="position-absolute arrow" style="bottom: 20px;left: 50%;z-index: 10 ;
      font-size: 3rem;color: #a43060;">
        <i class="bi bi-arrow-down-circle-fill"></i>
      </div>
    </div>
  </header>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-7 text-center mx-auto">
          <h3>濃香水系列</h3>
          <h4 class="mt-5"><i class="bi bi-pin-angle-fill"></i> 價格差異</h4>
          <span>香精濃度的不同反應在價格差異。因為原料非常昂貴，尤其在純天然的情況下。因此使用的原料萃取物越少，最終產品的價格就越便宜。這就是為什麼古龍水通常更便宜。</span>
          <h4 class="mt-5"><i class="bi bi-pin-angle-fill"></i> 香味持久度</h4>
          <span>濃香水是所有序列最持久的。濃度較低的古龍水能產生新鮮的效果，並具有淡淡的香氣，但香氣在一到兩個小時後消失，而淡香水則持續三到四個小時。
            相比之下，淡香水和香水提取物的氣味物質含量更高。香精通常能持續長達6個小時。因為這類型香氛非常持香且味道濃厚，
            因此每次使用只需沾點些許在重點部分即可～適合夜晚或是出席重要場合時使用！</span>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6">
          <div class="images h-100" style="background-image: url('https://i.imgur.com/4Tm4Us2.jpg')"></div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="card">
            <a href="#/products">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/wu9zo4s/1625812795027.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZV5qpEhOahzSHbDRXSNFd12UVEV6l%2F2QRTeoYodd5%2Fjp9NQ%2BGynKx%2FnSaUs4LefrXGfQTafPDTvMlOX0wjXgDiCXjtrRUt3asMmD9us3qSHdVmTwXe6drnxh7x1t7V040Br9zijAVBMlWpX3Vlekh84N%2BfRy8N4lY3ryUG3dr5ba2wjIiqBDNlnexLbrkSV8t3OKE5ZspMEaRNeJDUlYSvXiC6EpbPqvTghQki5WZ100QOcNctSMzJYvOBKAXwyN4bn6C%2FCl9iT91uMzsOLuqIX1UHNAgB5%2FPkFt9U%2BInXvP0kU7ujM41dY5xbTITVNW3ilGjPJXzN6cp5%2BbuXnG9w%3D%3D" class="card-img-top" alt="">
              <div class="card-body">
                <h3 class="fw-bold">海洋之心</h3>
                <p class="card-text">$2,300</p>
              </div>
            </a>
          </div>
          <div class="card mt-3">
            <a href="#/products">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/wu9zo4s/1625814003235.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cJbEIjUO%2FxDlPIs%2B1gAp85ZsPUVKVE7vM8KLFOav8vGTTAWCN7%2BBIRVE0QqQEAlUGgelfyxOqmXIa4BO18QFJksRT7HNJj3CHYVUGEKYmvYBknOz4%2FQ5kuBmqhzwp%2BNCS3mqHoWnFbUUEYaxvfdauMuCUKqzsaA0ceTkSCRbmdMpKQ0gVT0MHe%2BEYCuKp%2BtSVg8%2FmSwr%2FTT0NWzd13ly6FTlneXa9DxB6NpLqNXpL1TgwbFtdDZlZiA9szuxtlQokIArfgtcZswt0NjuWpvjLsNb%2BwnJd9i37JGDEHyL03QNOPlGiVM%2F%2FT%2Fmqfx%2F%2FYlRELvX3pFFE5bRbT0JKatBiQ%3D%3D" class="card-img-top" alt="">
              <div class="card-body">
                <h3 class="fw-bold">禁忌之香</h3>
                <p class="card-text">$4,300</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="card">
            <a href="#/products">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/wu9zo4s/1625813613829.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a21dFduYuSI2%2FwpTCqhIA7yXSgUHN3lvN6tRa67F6YW4N57R2CGKpH6kUQaUgOKfuvl6VhNHkwdVYSdmhOYusvoKjf7bjSHTIyU%2Bscz8FsP%2FQ7nMIpdnvyIz%2F042DYlrTM0CXO65l8IC%2BlM8CiNRQHi0Bri5mef1huWHRMGd00OfzvkhStLx%2FcTXMJuwnQMNJm2I60nHtv0ghHQhSDmkl8%2BFIFSL0FK%2Blx7BqGwoqByquOeBeHGuRuplvYP9QncdeI2pIKaNq6IV603rry29zmS2VCVMF3Fr177K4EWu%2BzQ8ZvYXIZLe7nl4DikCppb38d6UlGb34xvjE3YrzlBZFw%3D%3D" class="card-img-top" alt="">
              <div class="card-body">
                <h3 class="fw-bold">狂野</h3>
                <p class="card-text">$3,600</p>
              </div>
            </a>
          </div>
          <div class="card mt-3">
            <a href="#/products">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/wu9zo4s/1625811996226.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=S83XulmKMu22JTQvbDHnlsvI8u57Jj9Atn%2FU5H2JBDr4eFz7U32vWKtuH3lpoj205RqDo9CDZ79M0GV1Bz82KDNPyPgPwQ7n28MwewZ3QF6iY%2F3tzhPTNpJCpfun152Gks%2F%2B3eym%2FodSIATGUtUvArETK9jb5IoHNxmGJr6F1W2f9%2BqjngfzXGY19AsGB1MDStYdjMseaaBnOau6cfi44tZVcUxCTuDDgj8V5XBv713t8RCKNiSSqRLyCXHAMvpV%2FfiPj9QhT0AsruET4gBsBdn96Mb9MTaZrdre1E1qnE7CDMVVQijNHaWozhyZm3Z6YWe1CVq6cniPIN0Zq64SNA%3D%3D" class="card-img-top" alt="">
              <div class="card-body">
                <h3 class="fw-bold">茉莉</h3>
                <p class="card-text">$2,500</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-fluid midBg mt-5">
      <div class="row h-100">
        <div class="col-lg-6 col-12   d-flex justify-content-center align-items-center">
          <h3>全新系列即將上市<br>敬請期待！</h3>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 text-center">
          <h3>香水有些分類呢？</h3>
          <span>香水不只可以代表一個人的風格，甚至還會影響他人對你的印象，
          提供以下兩種最常見的香水種類。</span>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h3>清淡香水(Eau de Toilette)</h3>
            <p>含5％至15％萃取物的淡香水不像它的兄弟姐妹一樣持久，香味通常只持續2到3個小時。</p>
            <p>但當你不希望辦公室同事整天呼吸著你濃烈的香水味時，淡香水可能是最理想的工作選擇。
              或者，您可以隨時使用這些技巧來延長香水的使用壽命。</p>
          </div>
        </div>
        <div class="col-md-6">
          <img src="https://i.imgur.com/7pqdNYg.png" class="img-fluid">
        </div>
      </div>
      <div class="row mt-5 flex-row-reverse ">
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h3>古龍水(Eau de Cologne）</h3>
            <p>很多人對古龍水的印象就是男生使用的香水，它們通常主要由柑橘類水果和芳香植物組成，氣味較淡，沒有強烈的基調，他的濃度只有3-5％，持香時間也只有1-2個小時。</p>
            <p>味道比較輕盈，很適合運動前後、沐浴後使用。它的香調變化比較不明顯，不管男女生都可以使用，也很適合當作入門香氛類型！</p>
          </div>
        </div>
        <div class="col-md-6">
          <img src="https://i.imgur.com/pQa93Zs.png" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="bottomBg">
      <div class="container mt-5 subscribe">
        <div class="row h-100 d-flex  align-items-center">
          <div class="col-lg-4 col-12 ">
            <h2>訂閱電子報</h2>
            <h3>取得最新消息！</h3>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="請輸入電子信箱"
              aria-label="Input group example" aria-describedby="btnGroupAddon2">
              <div class="input-group-prepend">
                  <button class="input-group-text btn-pink" id="btnGroupAddon2"
                  >訂閱</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    couponsTime() {
      setTimeout(() => {
        this.$swal({
          title: '領取優惠券',
          text: 'PerfumeOff',
          icon: false,
          showConfirmButton: true,
          timer: 10000,
          imageUrl: 'https://i.imgur.com/21uzzAF.jpg',
        });
      }, 3000);
    },
  },
  mounted() {
    this.couponsTime();
  },
};
</script>
<style lang="scss" scoped>
  h2 {
    color: #a43060;
  }
  h4 {
    font-size: 1.2rem;
  }
  span {
    color: #777777;
  }
  header{
    background-image: url('https://i.imgur.com/CpJ6DOx.jpg');
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    // margin-top: -56px;
    .headerTitle {
      padding: 30px;
      background: rgba(219, 212, 212, 0.8);
    }
    .arrow {
      animation: arrow 2s infinite;
    }
    @keyframes arrow {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  }
  section {
    // padding: 5rem 0;
    .images {
      background-position: center;
      background-size: cover;
    }
    .card {
      a {
        color: #212529;
        text-decoration:none;
      }
      img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: 50% 28%;
      }
    }
    .midBg {
      background-image: url('https://i.imgur.com/yPQZs6u.jpg');
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      height: 300px;
      h3 {
        color:#a43060;
      }
    }
    .bottomBg {
      background-image: url('https://i.imgur.com/JlpU1nO.jpg');
      background-position: 50% 20%;
      background-size: cover;
      h2 {
        color:#fff;
      }
      h3 {
        color:#fff;
      }
      .subscribe {
        height: 350px;
      }
    }
  }
</style>
