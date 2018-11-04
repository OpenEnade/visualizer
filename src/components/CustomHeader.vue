<template>
  <div>
    <div class="container">
      <NavbarC />
    </div>
  </div>
</template>

<script>
import NavbarC from '@/components/Navbar.vue';

export default {
  name: 'CustomHeader',
  components: {
    NavbarC,
  },
};
</script>

<style scoped>
.jumbotron {
  max-height: 100px;
}
</style>
