<template>
  <div id="App">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>
