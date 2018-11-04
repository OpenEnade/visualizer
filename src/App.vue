<template>
  <div id="App">
    <CustomHeader />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    CustomHeader,
    Footer
  },
};
</script>
