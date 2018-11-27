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
        @change="filterByState()">
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
      @change="filterByCity()">
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
    @change="filterByCategory()">
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
    @change="filterByModality()">
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
  @change="filterByYear()">
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
  methods: {
    ...mapActions([
      'filterByStateAction',
      'filterByCityAction',
      'filterCategoryAction',
      'filterByModalityAction',
      'filterByYearAction'
    ]),
    filterByState: function () {
      if(this.state) {
        this.filterByStateAction(this.state);
      }
    },
    filterByCity: function () {
      if (this.city) {
        this.filterByCityAction(this.city);
      }
    },
    filterByCategory: function () {
      if (this.category) {this.filterCategoryAction(this.category);}
    },
    filterByModality: function () {
      if (this.modality) {this.filterByModalityAction(this.modality);}
    },
    filterByYear: function () {
      if(this.yearList) {this.filterByYearAction(this.year);}
    }
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

  created: function() {
  },
  updated: function() {
  },
};
</script>

<style scoped lang="scss">
</style>
