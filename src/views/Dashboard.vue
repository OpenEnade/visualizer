<template>
  <div class="dashboard animated fadeIn slow">
    <PageHeader description="Lista de notas associadas ao curso selecionado" />
    <div class="list-university">
      <GradeList />
    </div>
  </div>
</template>

<script>

import GradeList from '@/components/GradeList.vue';
import PageHeader from '@/components/PageHeader.vue';
import ApiService from '@/services/ApiService.js';

export default {
  name: 'Dashboard',
  components: {
    GradeList,
    PageHeader,
  },
};
</script>


<style lang="scss" scoped>
.list-university {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
