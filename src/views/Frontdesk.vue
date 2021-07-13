<template>
<NavbarViews></NavbarViews>
<router-view></router-view>
<Footer></Footer>
</template>
<script>
import NavbarViews from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    NavbarViews,
    Footer,
  },
};
</script>
