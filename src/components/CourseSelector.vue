<template>

  <section class="course-selector">
    <h1>Lista de cursos</h1>

    <form>
      <div class="form-row">
        <div class="form-group col-sm-3 col-md-3 col-lg-3"></div>
        <div class="form-group col-sm-6 col-md-6 col-lg-6">
          <label for="course-selection" class="course-label">Cursos</label>
          <select class="form-control" id="course" v-model="course">
            <option disabled value="">Escolha um curso</option>
            <option>Ciência da Computação</option>
            <option>História</option>
            <option>Sociologia</option>
            <option>Engenharia Mecatrônica</option>
          </select>
        </div>
        <div class="form-group col-sm-6 col-md-3 col-lg-3"></div>
      </div>

      <button type="button" class="btn btn-primary">Listar</button>
    </form>

  </section>

</template>

<script lang="js">
export default  {
name: 'course-selector',
props: [],
mounted() {

},
data() {
  return {
    course: ''
  }
},
methods: {

},
computed: {

},

updated() {
  console.log(this.course);
},
}
</script>

<style scoped lang="scss">
.course-label {
  font-weight: bold;
}

.btn-primary {
  background-color: #36648b;
  border-color: #36648b;
}

.btn-primary:hover {
  background-color: #104e8b;
  border-color: #104e8b;
}
</style>
