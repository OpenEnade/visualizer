<template lang="html">

  <section class="comparison animated fadeIn slow">
    <PageHeader description="Comparação de cursos" />

    <div class="list-comparator">
      <div class="row">
        <div class="col" />
        <div
          class="col"
          style="text-align: center">
          <h2>{{ course }}</h2>
        </div>
        <div class="col" />
      </div>
      <hr>
      <br>

      <div v-if="courses.length == 0">
        <Spinner />
      </div>

      <div v-if="chartData.length > 0">
        <Chart :courses="chartData"/>
      </div>

      <div class="row" v-if="courses.length > 0">
        <div class="col-2">
          <div class="table-responsive">
            <table class="table table-borderless">
              <tr>
                <th class="header">Universidade</th>
              </tr>
              <tr>
                <th class="header">Código do curso</th>
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
                <th class="header">Formação Geral</th>
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
        <div
          v-for="(item) in courses"
          class="col-2 table-item">
          <div class="table-responsive">
            <table class="table table-borderless">
              <tr>
                <td>{{ item.universityName }}</td>
              </tr>
              <tr>
                <td>{{ item.courseCode }}</td>
              </tr>
              <tr>
                <td>{{ item.category }}</td>
              </tr>
              <tr>
                <td>{{ item.modality }}</td>
              </tr>
              <tr>
                <td>{{ item.enadeConcept }}</td>
              </tr>
              <tr>
                <td>{{ item.continuousConcept }}</td>
              </tr>
              <tr>
                <td>{{ item.average }}</td>
              </tr>
              <tr>
                <td>{{ item.subscribed }}</td>
              </tr>
              <tr>
                <td>{{ item.participants }}</td>
              </tr>
              <tr>
                <td>{{ item.grossScore }}</td>
              </tr>
              <tr>
                <td>{{ item.standardScore }}</td>
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
import ApiService from '@/services/ApiService.js';
import Spinner from '@/components/Spinner.vue';
import Chart from "../components/Chart";

export default {
  name: 'Comparison',
  components: {
      Chart,
    PageHeader,
    Spinner
  },
  data() {
    return {
      course: '',
      courses: [],
      chartData: [],
    };
  },
  computed: {

  },
  async created() {
    this.course = localStorage.getItem('curso');
    const courses = JSON.parse(localStorage.getItem('cursosComparacao'));
    this.chartData = this.getChartData(courses);
  },
  methods: {
  getChartData(courses) {

  },
  },
};
</script>

<style scoped lang="scss">
.comparison {
}

.list-comparator {
  align-content: center;
  padding: 10px;
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
