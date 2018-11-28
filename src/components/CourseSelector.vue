<template>
  <div class="container">
    <!-- <h2 class="text-center"> Pesquise um curso do seu interesse </h2> -->
    <form>
      <div class="form-row">
        <div class="form-group col-sm-3 col-md-3 col-lg-3" />
        <div class="form-group col-sm-6 col-md-6 col-lg-6 text-center">
          <label for="course-selection" class="course-label">Cursos</label>
          <select id="courseName" v-model="courseName" class="form-control">
            <option disabled selected value="">Escolha um curso</option>
            <option v-for="curso in courses" :key="curso.codigoCurso" :value="curso.nome">
              {{ curso.nome }}
            </option>

          </select>
          <div class="btn-div">
            <button class="btn btn-primary" @click.prevent="searchCourse()">Pesquisar</button>
          </div>
        </div>
        <div class="form-group col-sm-6 col-md-3 col-lg-3" />
      </div>
    </form>
  </div>
</template>

<script lang="js">
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CourseSelector',
  data() {
    return {
      courseName: '',
    };
  },
  computed: {
    ...mapState({
      courses: 'coursesValids',
    }),
  },
  created() {},

  updated() {},

  methods: {
    ...mapActions([
      'persistCourseName',
    ]),
    searchCourse() {      
      if (this.courseName) {
        this.persistCourseName(this.courseName);
        this.$router.replace('notas');
      }
    },
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
  border-radius: 300px;
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
