<template lang="html">
  <section class="list-university animated fadeIn slow">
    <h1>{{courseName}}</h1>
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
            :key="item.codigoIES">
            <input
              v-b-tooltip.hover
              :value="item"
              v-model="checkedUniversities"
              :disabled="checkedUniversities.length >= 3 && checkedUniversities.indexOf(item) == -1"
              class="input-checkbox"
              type="checkbox"
              title="Selecione até 3 universidades para comparar">
            <th scope="row">{{ index }}</th>
            <td>{{ item.nome }}</td>
            <td>{{ item.categoriaAdmin }}</td>
            <td>{{ item.modalidade }}</td>
            <td>{{ item.continuousConcept }}</td>
            <td>{{ item.concept }}</td>
            <td>{{ 2018 }}</td>
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
            class="btn btn-outline-primary" @click.prevent="compareCourses()">Comparar</button>

        </div>
      </transition>
      <!-- <span>{{ checkedUniversities }}</span> -->
    </template>
    </transition>
  </section>
  </transition-group>

</template>

<script lang="js">
import ApiService from '@/services/ApiService.js';

export default {
  universityName: 'list-university',
  data() {
    return {
      checkedUniversities: [],
      courseName: 'TECNOLOGIA EM REDES DE COMPUTADORES',
      universityList: [],
      courseList: [],
    };
  },

  methods: {
    getUniversitiesByCourse() {
      return ApiService.getUniversitiesByCourse(this.courseName).then(response => this.universityList = response)
    },

    getCoursesModality(courseName) {
      for (let i=0; i<this.universityList.length; i++) {
        this.universityList[i].cursos.forEach(curso => {
          if (curso.nome == courseName) {
            this.$set(this.universityList[i], 'modalidade', curso.modalidade);
          }
        });
        console.log(this.universityList[i]);
      }
    },

    compareCourses() {
      if (this.checkedUniversities) {
        this.$router.replace('comparacao');
      }
    }
  },
  
  computed: {
    selectable() {
      return this.checkedUniversities.length < 3;
    },
    comparable() {
      return this.checkedUniversities.length > 1 && this.checkedUniversities.length <= 3;
    },
  },
  created () {
    let course = localStorage.getItem('curso');
    if (course) {
      this.courseName = course;
    }
   this.getUniversitiesByCourse()
   .then((res) => this.getCoursesModality(this.courseName));
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
