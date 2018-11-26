<template lang="html">
  <section class="filter">
    <h1 style="text-align: center">Filtros</h1>
    <div class="form-row">
      <div class="form-group col-sm-0 col-md-2 col-lg-2"/>
      <div class="form-group col-sm-12 col-md-2 col-lg-2">
        <select
        v-b-tooltip.hover
        id="selectState"
        v-model="state"
        class="form-control form-control-sm"
        title="Filtrar por estado"
        @change="filtrar()">
        <option
        disabled
        value="">Estado</option>
        <option
        v-for="(item, index) in stateList"
        :key="index">{{ item }}</option>
      </select>
    </div>
    <div class="form-group col-sm-0 col-md-1 col-lg-1"/>
    <div class="form-group col-sm-12 col-md-2 col-lg-2">
      <select
      v-b-tooltip.hover
      id="selectCity"
      v-model="city"
      class="form-control form-control-sm"
      title="Filtrar por município"
      @change="filtrar()">
      <option
      disabled
      value="">Município</option>
      <option
      v-for="(item, index) in cityList"
      :key="index">{{ item }}</option>
    </select>
  </div>
  <div class="form-group col-sm-0 col-md-1 col-lg-1"/>
  <div class="form-group col-sm-12 col-md-2 col-lg-2">
    <select
    v-b-tooltip.hover
    id="selectCity"
    v-model="category"
    class="form-control form-control-sm"
    title="Filtrar por categoria administrativa"
    @change="filtrar()">
    <option
    disabled
    value="">Categoria administrativa</option>
    <option
    v-for="(item, index) in categoryList"
    :key="index">{{ item }}</option>
  </select>
</div>
</div>
<div class="form-row justify-content-around">
  <div class="form-group col-sm-0 col-md-2 col-lg-2"/>
  <div class="form-group col-sm-12 col-md-2 col-lg-2">
    <select
    v-b-tooltip.hover
    id="selectCity"
    v-model="modality"
    class="form-control form-control-sm"
    title="Filtrar por modalidade de ensino"
    @change="filtrar()">
    <option
    disabled
    value="">Modalidade de ensino</option>
    <option
    v-for="(item, index) in modalityList"
    :key="index">{{ item }}</option>
  </select>
</div>
<div class="form-group col-sm-12 col-md-2 col-lg-2">
  <select
  v-b-tooltip.hover
  id="selectCity"
  v-model="year"
  class="form-control form-control-sm"
  title="Filtrar por ano"
  @change="filtrar()">
  <option
  disabled
  value="">Ano</option>
  <option
  v-for="(item, index) in yearList"
  :key="index">{{ item }}</option>
</select>
</div>
<div class="form-group col-sm-0 col-md-2 col-lg-2"/>
</div>

</section>
</template>

<script lang="js">
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ListFilter',
  props: {
    courseName: {
      type: String,
      default: "",
      required: true
      
    }
  },
  methods: {
    ...mapActions([
      'loadUniversities'
    ]),
    filtrar: function () {
      console.log("filtrando");
    }
  },
  created: function() {
    this.loadUniversities(this.courseName);
  },
  computed: {
    ...mapState({
      stateList: 'stateList',
      cityList: 'cityList',
      categoryList: 'categoryList',
      modalityList: 'modalityList',
      yearList: 'yearList',
    })
  },
  data() {
    return {
      state: '',
      city: '',
      category: '',
      modality: '',
      year: '',
    }
  },
};
</script>

<style scoped lang="scss">
</style>
