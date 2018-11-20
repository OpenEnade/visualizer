<template>

  <section class="page-header">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Open Enade</h1>
        <p class="lead">{{ description }}</p>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'PageHeader',
  components: {},
  props: {
    description: String,
    default:
      'Plataforma aberta para consulta dos dados do Exame Nacional de Desempenho de Estudantes',
  }
};
</script>

<style scoped>
.display-4 {
  font-weight: bold;
  color: darkgray;
}

.lead {
  color: #2e6588;
}

.jumbotron {
  background: transparent;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}
</style>
