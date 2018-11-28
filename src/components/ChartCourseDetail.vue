<template>
  <div class="container">
    <GChart
      :data="chartData"
      type="ColumnChart"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Chart',
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [],
    };
  },
  computed: {
    ...mapState([
      'gradesByCourseAreaCode',
      'currentCourseGrade',
      ]),
  },
  methods:{
    ...mapActions([ 
        'loadGradesByCourseArea',
      ]),
  },
  mounted() {
    this.loadGradesByCourseArea(this.currentCourseGrade.info.curso.codigoArea);
    console.log(this.gradesByCourseAreaCode);

    const usefulGrades = this.gradesByCourseAreaCode.filter( grade => grade.avaliacao.enadeContinuo );



  },
};
</script>

<style scoped>

</style>
