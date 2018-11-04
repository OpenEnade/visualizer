<template>

  <section class="page-header">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Open Enade</h1>
        <p class="lead">{{description}}</p>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "page-header",
  components: {},
  props: {
    description: String
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.page-header {
}

.display-4 {
  font-weight: bold;
  color: darkgray;
}

.lead {
  color: #2e6588;
}

.jumbotron {
  background: transparent;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}
</style>
