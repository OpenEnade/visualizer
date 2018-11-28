<template>
  <section class="course-detail animated fadeIn slow">
    <br>
    <h1 v-if="currentCourseGrade">{{ currentCourseGrade.info.curso.nome }}</h1>
    <h1 v-else> {{ errorCourseMessage }} </h1>
    <h4 v-if="currentCourseGrade"> {{ currentCourseGrade.info.universidade.nome }} </h4>
    <h4 v-else> {{ errorUniversityMessage }} </h4>
    <hr>
    <h5 class="detail-header">DADOS DO CURSO</h5>
    <br>
    <div>
      <div v-if="Object.keys(chartData).length > 0">
        <Chart :courses="chartData"/>
      </div>
      <div v-else> 
        <Spinner />
      </div>
      <hr>
      <br>
      <table class="table table-bordless ">
        <tbody>
          <tr > 
            <th>Conceito ENADE</th>
            <td v-if="currentCourseGrade">{{ currentCourseGrade.avaliacao.enadeFaixa }}</td>
            <td v-else> {{ integerErrorMessage }} </td> 
           
            <th>Conceito Contínuo</th>
            <td v-if="currentCourseGrade"> {{ 
              currentCourseGrade.avaliacao.enadeContinuo ? currentCourseGrade.avaliacao.enadeContinuo.toFixed(2) : ''
              }}</td>
            <td v-else> {{ floatErrorMessage }} </td>              
          </tr>
          <tr> 
            <th>Nota Bruta Conteúdo Específico</th>
            <td v-if="currentCourseGrade">{{ 
              currentCourseGrade.avaliacao.notaBrutaCE ? currentCourseGrade.avaliacao.notaBrutaCE.toFixed(2) : ''
            }}</td>
            <td v-else> {{ floatErrorMessage }} </td> 
          
            <th>Nota Padronizada Conteúdo Específico</th>
            <td v-if="currentCourseGrade"> {{ 
              currentCourseGrade.avaliacao.notaPadronizadaCE ?
              currentCourseGrade.avaliacao.notaPadronizadaCE.toFixed(2) : ''

            }}</td>
            <td v-else> {{ floatErrorMessage }} </td>  
          </tr>
          <tr> 
            <th>Nota Bruta Formação Geral</th>
            <td v-if="currentCourseGrade">{{ 
              currentCourseGrade.avaliacao.notaBrutaFG ? currentCourseGrade.avaliacao.notaBrutaFG.toFixed(2) : ''
            }}</td>
            <td v-else> {{ floatErrorMessage }} </td> 
          
            <th>Nota Padronizada Formação Geral</th>
            <td v-if="currentCourseGrade"> {{ 
              currentCourseGrade.avaliacao.notaPadronizadaFG ?
              currentCourseGrade.avaliacao.notaPadronizadaFG.toFixed(2) : ''

            }}</td>
            <td v-else> {{ floatErrorMessage }} </td>  
          </tr>
          <tr>
            <th>Concluintes Inscritos</th>
            <td v-if="currentCourseGrade"> {{ currentCourseGrade.avaliacao.concluintesInscritos }}</td>
            <td v-else> {{ integerErrorMessage }} </td>
          
            <th>Concluintes Participantes </th>
            <td v-if="currentCourseGrade">{{ currentCourseGrade.avaliacao.concluintesParticipantes }}</td>
            <td v-else> {{ integerErrorMessage }} </td>           
          </tr>  
          <tr>
            <th>Modalidade de Ensino</th>
            <td v-if="currentCourseGrade"> {{ currentCourseGrade.info.curso.modalidade }}</td>          
            <td v-else> {{ errorCourseMessage }} </td>
          
            <th>Categoria Administrativa</th>             
            <td v-if="currentCourseGrade">{{ currentCourseGrade.info.universidade.categoriaAdmin }}</td>
            <td v-else> {{ errorCourseMessage }}  </td>
          </tr> 
          <tr>
            <th>Ano</th>
            <td v-if="currentCourseGrade">{{ currentCourseGrade.info.ano.ano }}</td>
            <td v-else> {{ integerErrorMessage }} </td>

            <th>Município</th>
            <td v-if="currentCourseGrade"> {{ currentCourseGrade.info.universidade.campus.nome }}</td>
            <td v-else> {{ errorCourseMessage }} </td>                    
          </tr>

          <tr>
            <th>Estado</th>
            <td v-if="currentCourseGrade">{{ currentCourseGrade.info.universidade.campus.estado.sigla }}</td>
            <td v-else> {{ integerErrorMessage }} </td>

            <th>Região</th>
            <td v-if="currentCourseGrade"> {{ currentCourseGrade.info.universidade.campus.estado.regiao.sigla  }}</td>
            <td v-else> {{ errorCourseMessage }} </td>                    
          </tr>               
           
        </tbody>
      </table>
    </div>
  </section>

</template>

<script>
import Chart from '@/components/Chart.vue';
import Spinner from "@/components/Spinner.vue";
import ApiService from '@/services/ApiService.js';
import { mapState, mapGetters } from 'vuex';

export default {
  name: "CourseDetail",
  components: {
    Chart,
    Spinner
  },
  data() {
    return {
      integerErrorMessage: 0,
      floatErrorMessage: 0.0,
      errorCourseMessage: 'Nenhum curso selecionado.',
      errorUniversityMessage: 'Nenhuma universidade selecionada',
      chartData: {},
    };
  },
  computed: {
    ...mapState([
      'currentCourseGrade',
      'currentCourseGradeDetail',
    ]),
  },
  created() { 
    this.verifyRoute();
    
    this.initChartData(this.currentCourseGradeDetail);
  },
  methods: {
    verifyRoute() {
      if (!this.currentCourseGrade) {
        this.$router.push('notas');
      }
    },
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
    }
  },  
  updated() {
    this.verifyRoute();
  }
};
</script>

<style scoped>
tr {
  text-align: center;

}
h4 {
  margin-left: 4px;
}
.course-detail {
  margin-left: 5%;
  margin-right: 5%;
}

.detail-header {
  font-weight: bold;
  color: #36648b;
  margin-left: 8px;
}

th {
  color: rgb(5, 47, 82);
}
</style>
