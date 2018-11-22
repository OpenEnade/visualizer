<template>
  <div class="main">
    <Navbar />
    <router-view />
    <FooterC />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterC from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    FooterC,
  },
};
</script>

<style> 
.main {
  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;
}
</style>