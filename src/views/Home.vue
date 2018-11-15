<template>
  <div class="home">
    <br>
    <br>
    <b-container flex>
      <div class="row justify-content-md-center" style="margin-top: 10%">
        <div class="col-md-auto">
          <h1 class="lead display-3 text-center">Open Enade</h1>
          <p class="lead text-center"> Plataforma aberta para consulta dos dados
            do Exame Nacional de Desempenho de Estudantes </p>
          <router-link tag="button" class="btn btn-primary btn-lg btn-block" to="cursos">Pesquise sobre um curso!</router-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {}
};
</script>

<style scoped>
p {
  margin-bottom: 0px;
  color: #2e6588;
}
.display-3 {
  font-weight: bold;
  color: darkgray;
}
button {
  margin-top: 5%;
}

.btn-primary {
  background-color: #36648b;
  border-color: #36648b;
}

.btn-primary:hover {
  background-color: #104e8b;
  border-color: #104e8b;
}
</style>
