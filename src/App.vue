<template>
  <div class="main">
    <Navbar />
    <router-view />
    <br>
    <br>
    <br>
    <FooterC />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterC from '@/components/Footer.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Navbar,
    FooterC,
  },
  methods: {    
    ...mapActions([
      'loadCourses'
    ]),
  },
  created: function () {
    this.loadCourses();
  }
};
</script>

<style>
.main {
  font-family: "Merriweather", "Helvetica Neue", Arial, sans-serif;
}
</style>
