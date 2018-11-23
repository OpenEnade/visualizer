<template>
  <div class="container">
    <!-- <h2 class="text-center"> Pesquise um curso do seu interesse </h2> -->
    <form>
      <div class="form-row">
        <div class="form-group col-sm-3 col-md-3 col-lg-3" />
        <div class="form-group col-sm-6 col-md-6 col-lg-6 text-center">
          <label for="course-selection" class="course-label">Cursos</label>
          <select id="course" v-model="course" class="form-control">
            <option disabled selected value="">Escolha um curso</option>
            <option v-for="curso in courseList" :key="curso.codigoCurso" :value="curso.nome">
              {{ curso.nome }}
            </option>

          </select>
          <div class="btn-div">
            <router-link tag="button" class="btn btn-primary" to="universidades">Pesquisar
            </router-link>
          </div>
        </div>
        <div class="form-group col-sm-6 col-md-3 col-lg-3" />
      </div>
    </form>
  </div>
</template>

<script lang="js">
import lodash from 'lodash';
import ApiService from '@/services/ApiService.js';

export default {
  name: 'CourseSelector',
  data() {
    return {
      course: '',
      courses: [],
    };
  },
  computed: {
    courseList() {
      return _.uniqBy(this.courses, 'nome')
    }
  },
  created() {
    ApiService.getCourses()
      .then(response => this.courses = response.data);
  },

  updated() {
  },
};
</script>

<style scoped lang="scss">
.course-label {
  font-weight: bold;
  font-size: 1.2rem;
}

.btn-primary {
  background-color: #36648b;
  border-color: #36648b;
}

.btn-primary:hover {
  background-color: #104e8b;
  border-color: #104e8b;
}

.btn-div {
  margin-top: 12px;
  text-align: center;
}
</style>
