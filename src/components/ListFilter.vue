<template lang="html">
  <section class="filter">
    <h1 style="text-align: center">Filtros</h1>

    <div class="form-row">
      <div class="form-group col-sm-2 col-md-2 col-lg-2"/>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <b-form-select
          v-b-tooltip.hover
          v-model="state"
          :options="stateList"
          title="Filtrar por estado"
          class="mb-3"
          size="sm"/>
        <div>Selected: <strong>{{ state }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <b-form-select
          v-b-tooltip.hover
          v-model="city"
          :options="cityList"
          title="Filtrar por município"
          class="mb-3"
          size="sm"/>
        <div>Selected: <strong>{{ city }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <b-form-select
          v-b-tooltip.hover
          v-model="adminCategory"
          :options="categoryList"
          title="Filtrar por categoria administrativa"
          class="mb-3"
          size="sm"/>
        <div>Selected: <strong>{{ adminCategory }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <b-form-select
          v-b-tooltip.hover
          v-model="educationModality"
          :options="modalityList"
          title="Filtrar por modalidade de ensino"
          class="mb-3"
          size="sm"/>
        <div>Selected: <strong>{{ educationModality }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2"/>
    </div>
    <div class="row">
      <div class="form-group col-sm-5 col-md-5 col-lg-5"/>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <b-form-select
          v-b-tooltip.hover
          v-model="year"
          :options="yearList"
          title="Filtrar por ano"
          class="mb-3"
          size="sm"/>
        <div>Selected: <strong>{{ year }}</strong></div>
      </div>
      <div class="form-group col-sm-5 col-md-5 col-lg-5"/>
    </div>

  </section>
</template>

<script lang="js">
export default {
  name: 'ListFilter',
  data() {
    return {
      state: '',
      city: '',
      adminCategory: '',
      educationModality: '',
      year: '',
      stateList: [
        {
          value: '',
          text: 'Estado',
        },
        {
          value: 'Paraíba',
          text: 'Paraíba',
        },
        {
          value: 'Pernambuco',
          text: 'Pernambuco',
        },
        {
          value: 'Ceará',
          text: 'Ceará',
        },
      ],
      cityList: [
        {
          value: '',
          text: 'Município',
        },
        {
          value: 'Campina Grande',
          text: 'Campina Grande',
        },
        {
          value: 'Recife',
          text: 'Recife',
        },
        {
          value: 'Ceará',
          text: 'Fortaleza',
        },
      ],
      categoryList: [
        {
          value: '',
          text: 'Categoria Administrativa',
        },
        {
          value: 'Federal',
          text: 'Federal',
        },
        {
          value: 'Estadual',
          text: 'Estadual',
        },
        {
          value: 'Privada',
          text: 'Privada',
        },
      ],
      modalityList: [
        {
          value: '',
          text: 'Modalidade de Ensino',
        },
        {
          value: 'Presencial',
          text: 'Presencial',
        },
        {
          value: 'Educação à Distância',
          text: 'Educação à Distância',
        },
      ],
      yearList: [
        {
          value: '',
          text: 'Ano',
        },
        {
          value: 2018,
          text: 2018,
        },
        {
          value: 2017,
          text: 2017,
        },
      ],
    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.filter {
}
</style>
