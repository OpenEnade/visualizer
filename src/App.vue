<template>
  <div id="App">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    CustomHeader,
    Navbar
  }
};
</script>
