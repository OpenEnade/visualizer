<template>

  <section class="course-detail animated fadeIn slow">
    <br>
    <h1>{{ course }}</h1>
    <h4 style="margin-left: 4px">Universidade Federal de Campina Grande</h4>
    <hr>
    <h5 class="detail-header">DADOS DO CURSO</h5>
    <br>
    <div>
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th>Ano</th>
            <td>2018</td>
            <th>Média Geral</th>
            <td>100</td>
          </tr>
          <tr>
            <th>Conceito ENADE</th>
            <td>5.0</td>
            <th>Conceito contínuo</th>
            <td>5.0</td>
          </tr>
          <tr>
            <th>Modalidade de Ensino</th>
            <td>Presencial</td>
            <th>Categoria Administrativa</th>
            <td>Federal</td>
          </tr>
          <tr>
            <th>Concluintes inscritos</th>
            <td>90</td>
            <th>Concluintes participantes</th>
            <td>90</td>
          </tr>
          <tr>
            <th>Nota bruta</th>
            <td>99.90</td>
            <th>Nota padronizada</th>
            <td>99.99</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Chart :courses="courses" />
  </section>

</template>

<script>
import Chart from './Chart';

export default {
  name: 'CourseDetail',
  components: { Chart },
  props: {
    courseName: {
      type: String,
      default: '',
      required: true,
    }
  },
  data() {
    return {

    };
  },

  created() {
    this.course = localStorage.getItem('curso');
  },
};
</script>

<style scoped>
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
