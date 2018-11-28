<template lang="html">
  <section class="list-university animated fadeIn slow">
    <div>
      <ListFilter v-bind:courseName="courseName"/>
    </div>
    <h1 style="text-align: center">{{ courseName }}</h1>
    <br>

    <div v-if="gradesByCourse.length == 0">
      <Spinner />
    </div>
    <section class="list-university animated fadeIn slow">
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
              <th scope="col">Conceito Contínuo</th>
              <th scope="col">Conceito ENADE</th>
              <th scope="col">Município</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
          <tbody>
            <tr
            @click="detailCourse()"
            v-for="(grade, index) in gradesByCourse"
            :key="index">
            <input
            v-b-tooltip.hover
            :value="grade"
            v-model="checkedUniversities"
            :disabled="checkedUniversities.length >= 3 && checkedUniversities.indexOf(item) === -1"
            class="input-checkbox"
            type="checkbox"
            title="Selecione até 3 universidades para comparar">

            <th scope="row">{{ index + 1 }}</th>
            <td 
                id=""
                @click="detailCourse(grade)"
                >
                  {{ grade.info.universidade.nome }}

            </td>
            <td>{{ grade.info.universidade.categoriaAdmin }}</td>
            <td>{{ grade.info.curso.modalidade }}</td>
            <td>{{ grade.avaliacao.enadeContinuo ? grade.avaliacao.enadeContinuo.toFixed(2) : ''}}</td>
            <td>{{ grade.avaliacao.enadeFaixa }}</td>
            <td>{{ grade.info.universidade.campus.nome }}</td>
            <td>{{ grade.info.ano.ano }}</td>
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
  <!-- <span>{{ checkedUniversities }}</span> -->
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
      currentSortDirection: 'asc',
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
  },
  methods: {
    ...mapActions([
      'loadGradesByCourseName',
      'persistGrade'
    ]),
    compareCourses() {

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
        this.$router.push('detalhes');        
      }      
    },    
  },
  updated () {
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
  color: rgb(5, 47, 82);
}
</style>
