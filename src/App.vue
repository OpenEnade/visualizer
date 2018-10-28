<template>
  <div id="App">
    <CustomHeader />
    <router-view/>
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader.vue';

export default {
  name: 'App',
  components: {
    CustomHeader,
  },
};
</script>
