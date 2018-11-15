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
            :key="item.value">{{ item.value }}</option>
        </select>
        <div>Selected: <strong>{{ state }}</strong></div>
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
            v-for="(item, index) in stateList"
            :key="item.value">{{ item.value }}</option>
        </select>
        <div>Selected: <strong>{{ city }}</strong></div>
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
            :key="item.value">{{ item.value }}</option>
        </select>
        <div>Selected: <strong>{{ category }}</strong></div>
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
            :key="item.value">{{ item.value }}</option>
        </select>
        <div>Selected: <strong>{{ modality }}</strong></div>
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
            :key="item.value">{{ item.value }}</option>
        </select>
        <div>Selected: <strong>{{ year }}</strong></div>
      </div>
      <div class="form-group col-sm-0 col-md-2 col-lg-2"/>
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
      category: '',
      modality: '',
      year: '',
      stateList: [{
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
      cityList: [{
        value: 'Campina Grande',
      },
      {
        value: 'Recife',
      },
      {
        value: 'Ceará',
      },
      ],
      categoryList: [{
        value: 'Federal',
      },
      {
        value: 'Estadual',
      },
      {
        value: 'Privada',
      },
      ],
      modalityList: [{
        value: 'Presencial',
      },
      {
        value: 'Educação à Distância',
      },
      ],
      yearList: [
        {
          value: 2018,
        },
        {
          value: 2017,
        },
      ],
    };
  },
  computed: {

  },

  watch: {},
  mounted() {},
  methods: {
    filtrar() {
      console.log(this.state);
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
}
</style>
