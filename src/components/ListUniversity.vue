<template lang="html">
  <section class="list-university">
    <h1>Ciência da Computação</h1>
    <br>
    <template>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">#</th>
              <th scope="col">Nome da universidade</th>
              <th scope="col">Categoria administrativa</th>
              <th scope="col">Modalidade de ensino</th>
              <th scope="col">Conceito contínuo</th>
              <th scope="col">Conceito ENADE</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
          <tbody is="transition-group" enter-active-class="animated zoomIn faster">
            <tr v-for="(item, index) in items" :key="item.universityName">
              <input class="input-checkbox" type="checkbox" :value="item" v-model="checkedUniversities" v-b-tooltip.hover title="Selecione até 3 universidades para comparar" :disabled="!selectable">
              <th scope="row">{{index}}</th>
              <td>{{ item.universityName }}</td>
              <td>{{ item.category}}</td>
              <td>{{ item.modality }}</td>
              <td>{{ item.continuousConcept }}</td>
              <td>{{ item.concept }}</td>
              <td>{{ item.year }}</td>
            </tr>
          </tbody>
        </table>
        <div class="btn-compare" v-if="comparable">
          <button type="button" class="btn btn-outline-primary">Comparar</button>
        </div>
        <span>{{checkedUniversities}}</span>
</template>

    
  </section>

</template>

<script lang="js">
  export default {
    universityName: 'list-university',
    data() {
      return { 
        checkedUniversities: [],
        items: [{
            universityName: 'Universidade Federal de Campina Grande',
            category: 'Federal',
            modality: 'Presencial',
            continuousConcept: 5.0,
            concept: 5,
            year: 2018,
          },
          {
            universityName: 'Universidade Federal da Paraíba',
            category: 'Federal',
            modality: 'Presencial',
            continuousConcept: 4.64,
            concept: 4,
            year: 2018,
          },
          {
            universityName: 'Universidade Federal de Pernambuco',
            category: 'Federal',
            modality: 'Presencial',
            continuousConcept: 4.02,
            concept: 4,
            year: 2018,
          },
          {
            universityName: 'Universidade Estadual da Paraíba',
            category: 'Federal',
            modality: 'Presencial',
            continuousConcept: 3.97,
            concept: 4,
            year: 2018,
          },
          {
            universityName: 'Faculdade de Ciências Sociais Aplicadas',
            category: 'Privada',
            modality: 'Presencial',
            continuousConcept: 3.40,
            concept: 4,
            year: 2018,
          },
        ],
      };
    },
    computed: {
      selectable: function() {
        return this.checkedUniversities.length < 3;
      },
      comparable: function() {
        return this.checkedUniversities.length > 0 && this.checkedUniversities.length <= 3;
      },
    },
    mounted() {
  
    },
    methods: {
    },
  
    updated() {
    },
  };
</script>

<style scoped lang="scss">
.list-university {
}

.table {
  text-align: center;
}

.input-checkbox {
  margin-top: 18px;
}

.btn-compare {
  width: 100%;
  text-align: center;
}
</style>
