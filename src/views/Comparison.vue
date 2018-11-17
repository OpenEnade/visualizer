<template lang="html">

  <section class="comparison">
    <PageHeader description="Comparação de cursos" />

    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <h2>Ciência da Computação</h2>
        </div>
        <div class="col"></div>
      </div>
      <hr>
      <br>

      <div class="row">
        <div class="col" v-for="(item, index) in courses" :key="item.universityName">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th>Universidade</th>
                <td>{{item.universityName}}</td>
              </tr>
              <tr>
                <th>Categoria administrativa</th>
                <td>{{item.category}}</td>
              </tr>
              <tr>
                <th>Modalidade de Ensino</th>
                <td>{{item.modality}}</td>
              </tr>
              <tr>
                <th>Média Geral</th>
                <td>{{item.average}}</td>
              </tr>
              <tr>
                <th>Conceito ENADE</th>
                <td>{{item.enadeConcept}}</td>
              </tr>
              <tr>
                <th>Conceito contínuo</th>
                <td>{{item.continuousConcept}}</td>
              </tr>
              <tr>
                <th>Concluintes inscritos</th>
                <td>{{item.subscribed}}</td>
              </tr>
              <tr>
                <th>Concluintes participantes</th>
                <td>{{item.participants}}</td>
              </tr>
              <tr>
                <th>Nota bruta</th>
                <td>{{item.grossScore}}</td>
              </tr>
              <tr>
                <th scope="row">Nota padronizada</th>
                <td>{{item.standardScore}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col">Col 3</div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  import PageHeader from '@/components/PageHeader.vue';

  export default {
    name: 'Comparison',
    components: {
      PageHeader,
    },
    data() {
      return {
        courses: [{
          universityName: 'Universidade Federal de Campina Grande',
          category: 'Federal',
          modality: 'Presencial',
          enadeConcept: 5.0,
          continuousConcept: 5.0,
          average: 100.0,
          subscribed: 90,
          participants: 90,
          grossScore: 99.90,
          standardScore: 99.99
          },
          {
            // Uma letra 'u' a mais para mudar a chave do elemento no v-for
          universityName: 'Uuniversidade Federal de Campina Grande',
          category: 'Federal',
          modality: 'Presencial',
          enadeConcept: 5.0,
          continuousConcept: 5.0,
          average: 100.0,
          subscribed: 90,
          participants: 90,
          grossScore: 99.90,
          standardScore: 99.99
          }]
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
.comparison {
}
</style>