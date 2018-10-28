<template lang="html">

  <section class="list-university">
    <h1>Ciência da Computação</h1>
    <br>
    <template>

      <b-table
        :fields="fields"
        :items="items"
        striped
        hover>
        <template
          slot="index"
          slot-scope="data">
          {{ data.index + 1 }}
        </template>

      </b-table>
    </template>
  </section>

</template>

<script lang="js">
export default {
  universityName: 'list-university',
  data() {
    return {
      fields: [
        { key: 'index', label: '#' },
        { key: 'universityName', label: 'Nome da universidade' },
        { key: 'category', label: 'Categoria Administrativa'},
        { key: 'modality', label: 'Modalidade de Ensino'},
        { key: 'continuousConcept', label: 'Conceito Contínuo', sortable: true},
        { key: 'concept', label: 'Conceito ENADE', sortable: true},
        { key: 'year', label: 'Ano' },
      ],

      items: [
        { universityName: 'Universidade Federal de Campina Grande', category:'Federal', modality: 'Presencial', continuousConcept: 4.98, concept: 5, year: 2018 },
        { universityName: 'Universidade Federal da Paraíba', category:'Federal', modality: 'Presencial', continuousConcept: 4.95, concept: 4, year: 2018 },
        { universityName: 'Universidade Federal de Pernambuco', category:'Federal', modality: 'Presencial', continuousConcept: 4.92, concept: 4, year: 2018 },
        { universityName: 'Faculade Estácio', category: 'Privada', modality: 'Educação à Distância', continuousConcept: 2.85, concept: 3, year: 2018 },
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
.list-university {
}
</style>
