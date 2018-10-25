<template>
  <nav class="container" role="navigation">
      <ul class="nav nav-fill bg-light justify-content-center">
        <li class="nav-item">
          <router-link
                  class="nav-link"
                  :to="{ name: 'home'}">
            Início
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
                  class="nav-link"
                  :to="{ name: 'cursos' }">
            Pesquisa
          </router-link>
        </li>

        <li class="nav-item">
          <router-link
                  class="nav-link disabled"
                  :to="{ name: 'cursos' }">
            Ranking
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
                  class="nav-link disabled"
                  :to="{ name: 'sobre' }">
            Sobre
          </router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.nav {
  min-height: 70px;
}

@media (min-width: 768px) {
  .nav > li > a {
    padding-top: 26.5px;
    padding-bottom: 26.5px;
    line-height: 27px;
  }
}
</style>
