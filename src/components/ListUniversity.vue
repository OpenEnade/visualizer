<template lang="html">  
  <section class="list-university animated fadeIn slow">
    <h1 style="text-align: center">{{ courseName }}</h1>
    <br>

    <div v-if="universityList.length == 0">
      <Spinner />
    </div>
    <section class="list-university animated fadeIn slow">
      <h1>{{ courseName }}</h1>
      <br>
      <div>
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
            v-for="(item, index) in universtitiesShowed"
            :key="index">
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
            <td>{{item.campus.nome}}</td>
            <td>{{ item.continuousConcept ? item.continuousConcept.toFixed(2) : '' }}</td>
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
    </div>    
  </section>
</template>

<script lang="js">
import lodash from 'lodash';
import ApiService from '@/services/ApiService.js';
import ListFilter from '@/components/ListFilter.vue';
import { mapState } from 'vuex';

import Spinner from '@/components/Spinner.vue';


export default {

  universityName: 'list-university',
  components: {
    Spinner,
  },

  data() {
    return {
      checkedUniversities: [],
      courseName: '',
      courseList: [],
    };
  },


  computed: {
    ...mapState({
      universityList: 'universityList',
      universtitiesShowed: 'universtitiesShowed'
    }),
    selectable() {
      return this.checkedUniversities.length < 3;
    },

    comparable() {
      return this.checkedUniversities.length > 1 && this.checkedUniversities.length <= 3;
    },

    universities() {
      return _.orderBy(this.universityList, 'continuousConcept', 'desc')
    }

  },
  updated () {

  },
  created() {
    if (localStorage.getItem('cursosComparacao')) {
      localStorage.removeItem('cursosComparacao');
    }

    const course = localStorage.getItem('curso');

    if (course) {
      this.courseName = course;
    }
  },

  methods: {
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

        ApiService.getUniversityGradesByYear(code, year)
          .then((response) => {
            const gradeInfo = response[0].avaliacao;
            this.$set(university, 'enadeConcept', gradeInfo.enadeFaixa);
            this.$set(university, 'continuousConcept', gradeInfo.enadeContinuo);
          });
      }

      return Promise.resolve(true);
    },

    async selectedCourses() {
      const selectedUniversities = [];
      for (let i = 0; i < this.checkedUniversities.length; i++) {
        const university = this.checkedUniversities[i];
        university.cursos = await university.cursos.filter(curso => curso.nome === this.courseName);
        selectedUniversities.push(university);
      }
      return selectedUniversities;
    },

    async compareCourses() {
      if (this.checkedUniversities) {
        const courses = await this.selectedCourses();
        localStorage.setItem('cursosComparacao', JSON.stringify(courses));
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
