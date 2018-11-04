<template>
  <div class="dashboard">
    <PageHeader description="Lista de universidades associadas ao curso selecionado" />
    <div class="list-filter">
      <ListFilter />
    </div>
    <div class="list-university">
      <ListUniversity />
    </div>
  </div>
</template>

<script>
import ListFilter from '@/components/ListFilter.vue';
import ListUniversity from '@/components/ListUniversity.vue';
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'Dashboard',
  components: {
    ListFilter,
    ListUniversity,
    PageHeader,
  },
};
</script>


<style lang="scss" scoped>
.list-filter {
}
.list-university {
  margin-left: 5%;
  margin-right: 5%;
}
</style>

