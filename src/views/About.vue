<template>
  <div class="home animated fadeIn slow">
    <PageHeader description="Mais sobre o Open Enade" />

    <div class="container flex">
      <div class="jumbotron">
        <h2 class="display-4 header">O que é</h2>
        <p class="lead"> Plataforma aberta para consulta dos dados
        do Exame Nacional de Desempenho de Estudantes.</p>
        <br>
        <h2 class="display-4 header">Objetivo</h2>
        <p class="lead">Disponibilizar um mecanismo rápido e pátrico para
        consulta e comparação do rendimento dos concluintes de universidades brasileiras a
        partir da nota do Enade</p>
      </div>
    </div>
  </div>

</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'About',
  components: {
    PageHeader,
  },
};
</script>


<style>
.jumbotron {
  background: white;
  padding-top: 26.5px;
  padding-bottom: 26.5px;
  line-height: 27px;
}

.header {
  color: #2e6588;
}
</style>
