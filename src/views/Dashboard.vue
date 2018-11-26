<template>
  <div class="dashboard animated fadeIn slow">
    <PageHeader description="Lista de universidades associadas ao curso selecionado" />      
    <div class="list-university">
      <ListUniversity />
    </div>
  </div>
</template>

<script>

import ListUniversity from '@/components/ListUniversity.vue';
import PageHeader from '@/components/PageHeader.vue';
import ApiService from '@/services/ApiService.js';

export default {
  name: 'Dashboard',
  components: {    
    ListUniversity,
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

