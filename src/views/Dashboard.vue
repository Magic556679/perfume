<template>
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
</template>
<script>
import Navbar from '@/components/NavbarDashboard.vue';

export default {
  components: { Navbar },
  data() {
    return {};
  },
};
</script>
