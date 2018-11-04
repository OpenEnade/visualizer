<template>
  <b-container fluid>
    <!-- <h2 class="text-center"> Pesquise um curso do seu interesse </h2> -->
    <form>
      <div class="form-row">
        <div class="form-group col-sm-3 col-md-3 col-lg-3" />
        <div class="form-group col-sm-6 col-md-6 col-lg-6 text-center">
          <label for="course-selection" class="course-label">Cursos</label>
          <select id="course" v-model="course" class="form-control">
            <option disabled value="">Escolha um curso</option>
            <option>Ciência da Computação</option>
            <option>História</option>
            <option>Sociologia</option>
            <option>Engenharia Mecatrônica</option>
          </select>
          <div class="btn-div">
            <button type="button" class="btn btn-primary">Pesquisar
            </button>
          </div>
        </div>
        <div class="form-group col-sm-6 col-md-3 col-lg-3" />
      </div>
    </form>
  </b-container>
</template>

<script lang="js">
export default {
  name: 'CourseSelector',
  data() {
    return {
      course: '',
    };
  },
  computed: {

  },
  mounted() {

  },

  updated() {
    console.log(this.course);
  },
  methods: {

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
