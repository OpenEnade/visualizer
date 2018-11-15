import Vue from 'vue';
import Router from 'vue-router';
import Courses from './views/Courses.vue';
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import CourseDetail from './components/CourseDetail.vue';
import Comparison from './views/Comparison.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/home',
    },
    {
      path: '/',
      redirect: '/home',
      // redirect: '/detalhes',,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/detalhes',
      name: 'detail',
      component: CourseDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: Courses,
    },
    {
      path: '/universidades',
      name: 'universidades',
      component: Dashboard,
    },
    {
      path: '/comparacao',
      name: 'comparacao',
      component: Comparison,
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});