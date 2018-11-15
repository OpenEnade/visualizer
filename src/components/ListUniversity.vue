<template lang="html">
  <section class="list-university">
    <h1>Ciência da Computação</h1>
    <br>
    <template>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col"/>
            <th scope="col">#</th>
            <th scope="col">Nome da universidade</th>
            <th scope="col">Categoria administrativa</th>
            <th scope="col">Modalidade de ensino</th>
            <th scope="col">Conceito contínuo</th>
            <th scope="col">Conceito ENADE</th>
            <th scope="col">Ano</th>
          </tr>
        </thead>
        <tbody
          is="transition-group"
          enter-active-class="animated zoomIn faster">
          <tr
            v-for="(item, index) in items"
            :key="item.universityName">
            <input
              v-b-tooltip.hover
              :value="item"
              v-model="checkedUniversities"
              :disabled="!selectable"
              class="input-checkbox"
              type="checkbox"
              title="Selecione até 3 universidades para comparar">
            <th scope="row">{{ index }}</th>
            <td>{{ item.universityName }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.modality }}</td>
            <td>{{ item.continuousConcept }}</td>
            <td>{{ item.concept }}</td>
            <td>{{ item.year }}</td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="comparable"
        class="btn-compare">
        <button
          type="button"
          class="btn btn-outline-primary">Comparar</button>
      </div>
      <span>{{ checkedUniversities }}</span>
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
    selectable() {
      return this.checkedUniversities.length < 3;
    },
    comparable() {
      return this.checkedUniversities.length > 0 && this.checkedUniversities.length <= 3;
    },
  },
  mounted() {

  },

  updated() {
  },
  methods: {
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
