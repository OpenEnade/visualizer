<template lang="html">
  <section class="list-university animated fadeIn slow">
    <div>
      <ListFilter v-bind:courseName="courseName"/>
    </div>
    <h1>{{ courseName }}</h1>
    <br>

    <div v-if="gradesByCourse.length === 0">
      <Spinner />
    </div>
    <section class="list-university animated fadeIn slow" v-if="gradesByCourse.length > 0">
      <br>
      <template>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"/>
              <th scope="col">#</th>
              <th scope="col">Universidade</th>
              <th scope="col">Categoria Administrativa</th>
              <th scope="col">Modalidade de Ensino</th>
              <th scope="col">Município</th>
              <th scope="col">Conceito Contínuo</th>
              <th scope="col">Conceito ENADE</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
          <tbody>
            <tr
            v-for="(grade, index) in grades"
            :key="index"
            v-model="currentGrade">
            <input
            v-b-tooltip.hover
            :value="grade"
            v-model="checkedUniversities"
            :disabled="checkedUniversities.length >= 3 && checkedUniversities.indexOf(grade) === -1"
            class="input-checkbox"
            type="checkbox"
            title="Selecione até 3 universidades para comparar">
    
            <th scope="row">{{ index + 1 }}</th>
            <div class="grade-selector" @click="detailCourse(grade)">
            <td>{{ grade.info.universidade.nome }}</td>
            <td>{{ grade.info.universidade.categoriaAdmin }}</td>
            <td>{{ grade.info.curso.modalidade }}</td>
            <td>{{ grade.info.universidade.campus.nome }}</td>
            <td>{{ grade.avaliacao.enadeContinuo.toFixed(2)}}</td>
            <td>{{ grade.avaliacao.enadeFaixa }}</td>
            <td>{{ grade.info.ano.ano }}</td>
            </div>
          </tr>
        </tbody>
      </table>

      <transition
      enter-active-class="animated slideInUp fast"
      leave-active-class="animated slideOutDown faster">
      <div
      v-if="comparable"
      class="btn-compare">
      <button
      type="button"
      class="btn btn-outline-primary"
      @click.prevent="compareCourses()">Comparar</button>

    </div>
  </transition>
</template>
</transition>
</section>
</transition-group>
</section>
</template>

<script lang="js">
import ListFilter from '@/components/ListFilter.vue';
import Spinner from '@/components/Spinner.vue';
import { mapState, mapActions } from 'vuex';


export default {
  universityName: 'list-university',
  components: {
    ListFilter,
    Spinner,
  },
  data() {
    return {
      checkedUniversities: [],      
      currentSort: 'position',
      currentSortDirection: 'desc',
      currentGrade: {},
    };
  },
  computed: {
    ...mapState({
      courseName: 'currentCourseName',
      gradesByCourse: 'gradesByCourseOnTable',
    }),
    selectable() {
      return this.checkedUniversities.length < 3;
    },
    comparable() {
      return this.checkedUniversities.length > 1 && this.checkedUniversities.length <= 3;
    },
    selectedCourses() {
      const coursesCodes = [];
      for (let i = 0; i < this.checkedUniversities.length; i++) {
        coursesCodes.push(this.checkedUniversities[i].cursos.map(curso => curso.codigoCurso));
      }
      return coursesCodes;
    },
    grades() {      
      return _.orderBy(this.gradesByCourse, 'avaliacao.enadeContinuo', this.currentSortDirection);
    }
  },
  methods: {
    ...mapActions([
      'loadGradesByCourseName',
      'persistGrade',
      'persistCoursesToCompare',
      'persistGradeForDetail',
    ]),
    compareCourses() {
      this.persistCoursesToCompare(this.checkedUniversities);      
      this.$router.push('comparacao');
    },
    verifyRoute() {
      if (!this.courseName) {
        this.$router.push('cursos');
      }
    },
    loadGrades() {
      this.loadGradesByCourseName(this.courseName);
    },
    detailCourse(grade) {          
      if (grade) {
        this.persistGrade(grade);
        const detailGradeCourse = [];
        detailGradeCourse.push(grade);
        this.persistGradeForDetail(detailGradeCourse);
        this.$router.push('detalhes');        
      }      
    },    
  },
  updated() {
    this.verifyRoute();
  },
  created() {
    this.verifyRoute();
    this.loadGrades();
  },
};
</script>

<style scoped lang="scss">
.table {
  text-align: center;
}

.input-checkbox {
  margin-top: 18px;
}

.btn-compare {
  bottom: 55px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

th {
  font-weight: bold;
  color: grey;
}

h1 {
  font-weight: bold;
  color: rgb(4, 56, 99);
  text-align: center;
}

.grade-selector {
  display: contents;
}

.grade-selector:hover {
  font-weight: bold;
  color: rgb(4, 56, 99);
  cursor: pointer;
  transform: scale(1.1);
}
</style>
