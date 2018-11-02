<template>

  <section class="course-detail">
    <h1>Ciência da Computação</h1>
    <h4 style="margin-left: 4px">Universidade Federal de Campina Grande</h4>
    <hr>
    <h5 class="detail-header">DADOS DO CURSO</h5>
    <br>
    <div style="margin-left: 4px">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th>Conceito ENADE</th>
            <td>5.0</td>
          </tr>
          <tr>
            <th>Conceito contínuo</th>
            <td>5.0</td>
          </tr>
          <tr>
            <th>Média Geral</th>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

</template>

<script>
export default {
  name: "course-detail",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.course-detail {
  margin-left: 5%;
  margin-right: 5%;
}

.detail-header {
  font-weight: bold;
  color: #36648b;
  margin-left: 8px;
}
</style>
