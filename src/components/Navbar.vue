<template>
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="d-flex flex-grow-1">
        <span class="w-100 d-lg-none d-block"/>
        <router-link class="navbar-brand d-none d-lg-inline-block" :to="{name:'home'}">
            OpenEnade
        </router-link>
        <router-link class="navbar-brand-two mx-auto d-lg-none d-inline-block" :to="{name:'home'}">
            <img src="../assets/logo.png" alt="OpenEnade" height="42" width="42">
        </router-link>
        <div class="w-100 text-right">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul class="navbar-nav ml-auto flex-nowrap">
            <li class="nav-item">
                <router-link :to="{name:'home'}" class="nav-link m-2 menu-item nav-active">Início</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name:'cursos'}" class="nav-link m-2 menu-item">Pesquisa</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name:'sobre'}" class="nav-link m-2 menu-item">Sobre</router-link>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
.navbar {
    background-color: #36648b
};
@media (min-width: 768px) {
.navbar-brand.abs
    {
        position: absolute;
        width: 100%;
        left: 0;
        text-align: center;
    }
}
</style>
