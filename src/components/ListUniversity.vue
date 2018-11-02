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
        { key: 'category', label: 'Categoria administrativa' },
        { key: 'modality', label: 'Modalidade de ensino' },
        { key: 'continuousConcept', label: 'Conceito contínuo' },
        {
          key: 'concept', label: 'Conceito ENADE', sortable: true, sortDirection: 'asc',
        },
        { key: 'year', label: 'Ano' },
      ],

      items: [
        {
          universityName: 'Universidade Federal de Campina Grande', category: 'Federal', modality: 'Presencial', continuousConcept: 5.0, concept: 5, year: 2018,
        },
        {
          universityName: 'Universidade Federal da Paraíba', category: 'Federal', modality: 'Presencial', continuousConcept: 4.64, concept: 4, year: 2018,
        },
        {
          universityName: 'Universidade Federal de Pernambuco', category: 'Federal', modality: 'Presencial', continuousConcept: 4.02, concept: 4, year: 2018,
        },
        {
          universityName: 'Universidade Estadual da Paraíba', category: 'Federal', modality: 'Presencial', continuousConcept: 3.97, concept: 4, year: 2018,
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
.list-university {
}
</style>
