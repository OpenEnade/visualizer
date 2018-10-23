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
        {
          key: 'concept', label: 'Conceito enade', sortable: true, sortDirection: 'asc',
        },
        { key: 'year', label: 'Ano' },
      ],

      items: [
        { universityName: 'Universidade Federal de Campina Grande', concept: 5, year: 2018 },
        { universityName: 'Universidade Federal da Paraíba', concept: 4, year: 2018 },
        { universityName: 'Universidade Federal de Pernambuco', concept: 4, year: 2018 },
        { universityName: 'Universidade Estadual da Paraíba', concept: 4, year: 2018 },
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
