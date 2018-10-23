<template>
  <div class="home">
    <br>
    <br>
    <div class="container">
      <div
        class="row justify-content-md-center"
        style="margin-top: 10%">
        <div class="col-md-auto">
          <h1 class="display-3">OpenEnade</h1>
          <p class="lead">Plataforma aberta para consulta dos dados</p>
          <p class="lead">do Exame Nacional de Desempenho de</p>
          <p class="lead">Estudantes</p>
          <router-link
            tag="button"
            class="btn btn-primary btn-lg btn-block"
            to="cursos">Pesquise sobre um curso!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {},
};
</script>

<style>
  p {
    margin-bottom: 0px;
    color: #2e6588;
  }
  .display-3 {
    font-weight: 900;
    color: darkgray;
  }
  button {
    margin-top: 5%;
  }
</style>
