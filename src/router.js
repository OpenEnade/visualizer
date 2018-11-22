import Vue from 'vue';
import Router from 'vue-router';
import Courses from './views/Courses.vue';
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
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
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
  },
  {
    path: '/detalhes',
    name: 'detail',
    component: CourseDetail,
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
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
  ],
});
