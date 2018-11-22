<template>
  <div class="home animated fadeIn slow">
    <br>
    <br>
    <div class="container">
      <div
        class="row justify-content-md-center"
        style="margin-top: 10%"
        >
        <div class="col-md-auto">
          <h1 class="lead display-3 text-center">Open Enade</h1>
          <div class="text-center">
            <p class="lead text-center"> Plataforma aberta para consulta dos dados
            do Exame Nacional de Desempenho de Estudantes </p>
            <router-link
              tag="button"
              class="btn btn-primary btn-xl"
              to="cursos"> Pesquise sobre um curso!
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {},
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
.btn {
  font-weight: 700;
  border: none;
  border-radius: 300px;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
}
.btn-xl {
  padding: 1rem 2rem;
}
.btn-primary {
  background-color: #36648b;
  border-color: #36648b;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  color: #fff;
  background-color: #104e8b !important;
}
.btn-primary:active, .btn-primary:focus {
  -webkit-box-shadow: 0 0 0 0.2rem rgba(240, 95, 64, 0.5) !important;
  box-shadow: 0 0 0 0.2rem rgba(240, 95, 64, 0.5) !important;
}
</style>
