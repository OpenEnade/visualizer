<template lang="html">

  <section class="list-university">
    <h1>Ciência da Computação</h1>
    <br>
    <b-table striped hover :items="items"></b-table>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'list-university',
    props: [],
    mounted() {

    },
    data() {
      return {
        items: [
          { nome: "Universidade Federal de Campina Grande", modalidade: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { nome: "Universidade Federal da Paraíba", modalidade: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { nome: "Universidade Federal de Pernambuco", modalidade: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { nome: "Universidade Estadual da Paraíba", modalidade: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.list-university {
}
</style>
