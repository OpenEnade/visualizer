<template>
  <div class="courses">
    <ListFilter/>
  </div>
</template>

<script>
import ListFilter from '@/components/ListFilter.vue';

export default {
  name: 'UniversitiesList',
  components: {
    ListFilter,
  },
};
</script>
