<template>
    <b-container>
      <b-navbar toggleable="md" type="light">

        <b-navbar-toggle target="nav_collapse"/>

        <b-navbar-brand to="/">OpenEnade</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
                <b-nav-item to="/"> Início </b-nav-item>
                <b-nav-item to="/cursos"> Pesquisa </b-nav-item>
                <b-nav-item to="/ranking"> Ranking </b-nav-item>
                <b-nav-item to="/sobre"> Sobre </b-nav-item>
                <b-nav-item to="/contato"> Contato </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>      
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