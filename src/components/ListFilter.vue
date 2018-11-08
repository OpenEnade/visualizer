<template lang="html">
  <section class="filter">
    <h1 style="text-align: center">Filtros</h1>
    <div class="form-row">
      <div class="form-group col-sm-2 col-md-2 col-lg-2" />
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <select class="form-control form-control-sm" v-b-tooltip.hover title="Filtrar por estado" id="selectState" v-model="state" @change="filtrar()">
              <option disabled value="">Estado</option>
              <option v-for="(item, index) in stateList" :key="item.value">{{item.value}}</option>
            </select>
        <div>Selected: <strong>{{ state }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <select class="form-control form-control-sm" v-b-tooltip.hover title="Filtrar por município" id="selectCity" v-model="city" @change="filtrar()">
              <option disabled value="">Município</option>
              <option v-for="(item, index) in stateList" :key="item.value">{{item.value}}</option>
            </select>
        <div>Selected: <strong>{{ city }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <select class="form-control form-control-sm" v-b-tooltip.hover title="Filtrar por categoria administrativa" id="selectCity" v-model="category" @change="filtrar()">
              <option disabled value="">Categoria administrativa</option>
              <option v-for="(item, index) in categoryList" :key="item.value">{{item.value}}</option>
            </select>
        <div>Selected: <strong>{{ category }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
        <!-- <b-form-select
              v-b-tooltip.hover
              v-model="modality"
              :options="modalityList"
              title="Filtrar por modalidade de ensino"
              class="mb-3"
              size="sm"
              v-on:change="filter(modality)"/> -->
        <select class="form-control form-control-sm" v-b-tooltip.hover title="Filtrar por modalidade de ensino" id="selectCity" v-model="modality" @change="filtrar()">
                <option disabled value="">Modalidade de ensino</option>
                <option v-for="(item, index) in modalityList" :key="item.value">{{item.value}}</option>
            </select>
        <div>Selected: <strong>{{ modality }}</strong></div>
      </div>
      <div class="form-group col-sm-2 col-md-2 col-lg-2" />
    </div>
    <div class="row">
      <div class="form-group col-sm-5 col-md-5 col-lg-5" />
      <div class="form-group col-sm-2 col-md-2 col-lg-2">
          <select class="form-control form-control-sm" v-b-tooltip.hover title="Filtrar por ano" id="selectCity" v-model="year" @change="filtrar()">
              <option disabled value="">Ano</option>
              <option v-for="(item, index) in yearList" :key="item.value">{{item.value}}</option>
          </select>
        <div>Selected: <strong>{{ year }}</strong></div>
      </div>
      <div class="form-group col-sm-5 col-md-5 col-lg-5" />
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
    mounted() {},
  
    watch: {},
    methods: {
      filtrar() {
        console.log(this.state);
      }
    },
  };
</script>

<style scoped lang="scss">
.filter {
}
</style>
