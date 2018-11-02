<template>
  <nav
    class="container"
    role="navigation">
    <ul class="nav nav-fill bg-light justify-content-center">
      <li class="nav-item">
        <router-link
          :to="{ name: 'home'}"
          class="nav-link">
          Início
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'cursos' }"
          class="nav-link">
          Pesquisa
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
          :to="{ name: 'cursos' }"
          class="nav-link disabled">
          Ranking
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'sobre' }"
          class="nav-link disabled">
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
