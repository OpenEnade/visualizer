<template>
  <div class="courses">
    <br>
    <ListFilter />
    <div class="list-university">
      <ListUniversity />
    </div>
  </div>
</template>

<script>
import ListFilter from '@/components/ListFilter.vue';
import ListUniversity from '@/components/ListUniversity.vue';

export default {
  name: 'Dashboard',
  components: {
    ListFilter,
    ListUniversity,
  },
};
</script>


<style lang="scss" scoped>
.list-university {
  margin-left: 5%;
  margin-right: 5%;
}
</style>

