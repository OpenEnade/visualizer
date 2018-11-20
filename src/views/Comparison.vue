<template lang="html">

  <section class="comparison">
    <PageHeader description="Comparação de cursos" />

    <div class="container">
      <div class="row">
        <div class="col" />
        <div class="col">
          <h2>Ciência da Computação</h2>
        </div>
        <div class="col" />
      </div>
      <hr>
      <br>

      <div class="row">
        <div class="col-3">
          <div class="table-responsive">
          <table class="table table-borderless">
            <tr>
              <th class="header">Universidade</th>
            </tr>
            <tr>
              <th class="header">Categoria administrativa</th>
            </tr>
            <tr>
              <th class="header">Modalidade de ensino</th>
            </tr>
            <tr>
              <th class="header">Conceito ENADE</th>
            </tr>
            <tr>
              <th class="header">Conceito contínuo</th>
            </tr>
            <tr>
              <th class="header">Média Geral</th>
            </tr>
            <tr>
              <th class="header">Candidatos inscritos</th>
            </tr>
            <tr>
              <th class="header">Candidatos participantes</th>
            </tr>
            <tr>
              <th class="header">Nota bruta</th>
            </tr>
            <tr>
              <th class="header">Nota padronizada</th>
            </tr>
          </table>
          </div>
        </div>
        <div v-for="(item) in courses" :key="item.universityName" class="col-4 table-item">
          <div class="table-responsive">
          <table class="table table-borderless">
          <tr>
            <td>{{item.universityName}}</td>
          </tr>
          <tr>
            <td>{{item.category}}</td>
          </tr>
          <tr>
            <td>{{item.modality}}</td>
          </tr>
          <tr>
            <td>{{item.enadeConcept}}</td>
          </tr>
          <tr>
            <td>{{item.continuousConcept}}</td>
          </tr>
          <tr>
            <td>{{item.average}}</td>
          </tr>
          <tr>
            <td>{{item.subscribed}}</td>
          </tr>
          <tr>
            <td>{{item.participants}}</td>
          </tr>
          <tr>
            <td>{{item.grossScore}}</td>
          </tr>
          <tr>
            <td>{{item.standardScore}}</td>
          </tr>
        </table>
        </div>
        </div>
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
            standardScore: 99.99,
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
            standardScore: 99.99,
          }
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
.comparison {
}

.table-item {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}

th {
  height: 70px;
}

td {
  padding: 0.75rem;
  height: 70px;
}

.header {
  color: rgb(5, 47, 82);
  min-height: 96px;
}
</style>