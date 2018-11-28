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
      <div> 
        <ChartCourseDetail/>
      </div>
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
import ChartCourseDetail from '@/components/ChartCourseDetail.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: "CourseDetail",
  components: {
    ChartCourseDetail
  },
  data() {
    return {
      integerErrorMessage: 0,
      floatErrorMessage: 0.0,
      errorCourseMessage: 'Nenhum curso selecionado.',
      errorUniversityMessage: 'Nenhuma universidade selecionada',
    };
  },
  computed: {
    ...mapState([
      'currentCourseGrade',
    ]),
  },
  methods: {
    verifyRoute() {
      if (!this.currentCourseGrade) {
        this.$router.push('notas');
      }
    },
  },
  created() { 
    this.verifyRoute();
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
