<template lang="html">
  <div>
    <div>
      <ListFilter v-bind:courseName="courseName"/>
    </div>
    <section class="list-university animated fadeIn slow">
      <h1>{{ courseName }}</h1>
      <br>
      <template>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col"/>
              <th scope="col">#</th>
              <th scope="col">Nome da universidade</th>
              <th scope="col">Categoria administrativa</th>
              <th scope="col">Modalidade de ensino</th>
              <th scope="col">Conceito contínuo</th>
              <th scope="col">Conceito ENADE</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
          <tbody>
            <tr
            v-for="(item, index) in universityList"
            :key="item.codigoIES + item.campus.codigo">
            <input
            v-b-tooltip.hover
            :value="item"
            v-model="checkedUniversities"
            :disabled="checkedUniversities.length >= 3 && checkedUniversities.indexOf(item) === -1"
            class="input-checkbox"
            type="checkbox"
            title="Selecione até 3 universidades para comparar">
            <th scope="row">{{ index }}</th>
            <td>{{ item.nome }}</td>
            <td>{{ item.categoriaAdmin }}</td>
            <td>{{ item.modalidade }}</td>
            <td>{{ item.continuousConcept ? item.continuousConcept.toFixed(2) : ''}}</td>
            <td>{{ item.enadeConcept }}</td>
            <td>{{ 2017 }}</td>
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
</div>
</template>

<script lang="js">
import ApiService from '@/services/ApiService.js';
import ListFilter from '@/components/ListFilter.vue';
export default {
  universityName: 'list-university',  
  components: {    
    ListFilter,
  },
  data() {
    return {
      checkedUniversities: [],
      courseName: '',
      universityList: [],
      courseList: [],

    };
  },

  computed: {
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
  created() {
    if (localStorage.getItem('cursosComparacao')) {
      localStorage.removeItem('cursosComparacao');
    }
    const course = localStorage.getItem('curso');
    if (course) {
      this.courseName = course;
    }
    this.getUniversitiesByCourse()
    .then(res => this.getCoursesModality(this.courseName))
    .then(() => this.getGrades());
  },

  updated() {

  },

  methods: {
    getUniversitiesByCourse() {
      return ApiService.getUniversitiesByCourse(this.courseName).then(response => this.universityList = response);
    },

    getCoursesModality(courseName) {
      for (let i = 0; i < this.universityList.length; i++) {
        this.universityList[i].cursos.forEach((curso) => {
          if (curso.nome === courseName) {
            this.$set(this.universityList[i], 'modalidade', curso.modalidade);
          }
        });
      }
    },

    getGrades() {
      for (let i = 0; i < this.universityList.length; i++) {
        const university = this.universityList[i];
        const code = university.codigoIES;
        const year = 2017;
        const grades = {};
        ApiService.getUniversityGradesByYear(code, year)
        .then((response) => {
          const gradeInfo = response[0].avaliacao;
          this.$set(university, 'enadeConcept', gradeInfo.enadeFaixa);
          this.$set(university, 'continuousConcept', gradeInfo.enadeContinuo);
        });
      }
    },

    compareCourses() {
      if (this.checkedUniversities) {
        localStorage.setItem('cursosComparacao', this.selectedCourses);
        this.$router.replace('comparacao');
      }
    },
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
