<template>

  <section class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bcg-primary">
      <a
        class="navbar-brand"
        href="/">Open Enade</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>

      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.header {
}

.bcg-primary {
  background-color: #36648b;
}
</style>
