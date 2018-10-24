<template>
  <b-container role="navigation">
    <b-nav
      tabs
      fill
      justified>
      <b-nav-item :to="{ name: 'home'}">
        Início
      </b-nav-item>
      <b-nav-item :to="{ name: 'cursos' }">
        Pesquisa
      </b-nav-item>
      <b-nav-item :to="{ name: 'sobre' }">
        Sobre
      </b-nav-item>
      <b-nav-item :to="{ name: 'contact' }">
        Contato
      </b-nav-item>
    </b-nav>
  </b-container>
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
