<template>
  <div class="home">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">OpenEnade</h1>
        <h4>O que é</h4>
        <p class="lead"> Plataforma aberta para consulta dos dados
        do Exame Nacional de Desempenho de Estudantes.</p>
        <h4>Objetivo</h4>
        <p class="lead">Disponibilizar um mecanismo rápido e pátrico para
        consulta e comparação do rendimento dos concluintes de universidades brasileiras a
        partir da nota do <Enade class=""/></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style>
  .jumbotron {
    background: white;
    padding-top: 26.5px;
    padding-bottom: 26.5px;
    line-height: 27px;
  }
</style>
