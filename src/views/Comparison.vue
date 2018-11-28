<template lang="html">

  <section class="comparison animated fadeIn slow">
    <PageHeader description="Comparação de cursos" />

    <div class="list-comparator">
      <div class="row">
        <div class="col" />
        <div
          class="col"
          style="text-align: center">
          <h2>{{ courseName }}</h2>
        </div>
        <div class="col" />
      </div>
      <div v-if="Object.keys(chartData).length > 0">
        <Chart :courses="chartData"/>
      </div>
      <hr>

      <br>

      <div v-if="courses.length == 0">
        <Spinner />
      </div>


      <div class="row" v-if="courses.length > 0">
        <div class="col-3">
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
                <th class="header">Candidatos inscritos</th>
              </tr>
              <tr>
                <th class="header">Candidatos participantes</th>
              </tr>
              <tr>
                <th class="header">Nota bruta de formação geral</th>
              </tr>
              <tr>
                <th class="header">Nota padronizada de formação geral</th>
              </tr>
              <tr>
                <th class="header">Nota bruta de conteúdo específico</th>
              </tr>
              <tr>
                <th class="header">Nota padronizada de conteúdo específico</th>
              </tr>
            </table>
          </div>
        </div>
        <div
          v-for="(item, index) in coursesCompared"
          :key="index"
          class="col-3 table-item">
          <div class="table-responsive">
            <table class="table table-responsive table-borderless">
              <tr>
                <td>{{ item.info.universidade.nome }}</td>
              </tr>
              <tr>
                <td>{{ item.info.curso.nome }}</td>
              </tr>
              <tr>
                <td>{{ item.info.universidade.categoriaAdmin }}</td>
              </tr>
              <tr>
                <td>{{ item.info.curso.modalidade }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.enadeFaixa }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.enadeContinuo.toFixed(2)   }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.concluintesInscritos }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.concluintesParticipantes }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.notaBrutaFG.toFixed(2) }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.notaPadronizadaFG.toFixed(2) }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.notaBrutaCE.toFixed(2) }}</td>
              </tr>
              <tr>
                <td>{{ item.avaliacao.notaPadronizadaCE.toFixed(2) }}</td>
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
import ApiService from '@/services/ApiService';
import Spinner from '@/components/Spinner.vue';
import Chart from "../components/Chart";
import { mapState } from 'vuex';


export default {
  name: 'Comparison',
  components: {
    Chart,
    PageHeader,
    Spinner,
  },
  data() {
    return {
      courses: [],
      chartData: {},
    };
  },
  computed: {
    ...mapState({
      courseName: 'currentCourseName',
    }),

    coursesCompared() {
      console.log(this.courses);
      return this.courses;
    }
  },

  created() {
    this.course = localStorage.getItem('curso');
    const courses = JSON.parse(localStorage.getItem('coursesToCompare'));
    this.initChartData(courses);
  },

  methods: {
    async initChartData(courses) {
      this.chartData = await this.getChartData(courses);
    },

    async getChartData(courses) {
      const newChartData = {};
      for (let courseIndex = 0; courseIndex < courses.length; courseIndex++) {
        const course = courses[courseIndex];
        const areaCode = course.info.curso.codigoArea;
        const universityCode = course.info.universidade.codigoIES;
        const countyCode = course.info.universidade.campus.codigo;
        const courseNotes = await ApiService.getCourseNotes(areaCode, universityCode, countyCode);
        for (let noteIndex = 0; noteIndex < courseNotes.length; noteIndex++) {
          const note = courseNotes[noteIndex];
          const university = note.info.universidade;
          const universityName = `${university.nome} - ${university.campus.nome}`;
          const year = note.info.ano.ano;
          const enadeNote = note.avaliacao.enadeContinuo.toFixed(2);
          if (newChartData[universityName]) {
            newChartData[universityName][year] = parseFloat(enadeNote);
          } else {
            newChartData[universityName] = {};
            newChartData[universityName][year] = parseFloat(enadeNote);
          }
        }
      }
      return newChartData;
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
  min-height: 70px;
}

td {
  padding: 0.75rem;
  min-height: 70px;
}

.header {
  color: rgb(5, 47, 82);
  min-height: 96px;
}

h2 {
  font-weight: bold;
  color: rgb(4, 56, 99);
}

.row {
}
</style>
