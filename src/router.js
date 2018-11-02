import Vue from 'vue';
import Router from 'vue-router';
import Courses from './views/Courses.vue';
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import CourseDetail from './views/CourseDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      // redirect: '/home',,
      redirect: '/detail'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'detail',
      component: CourseDetail,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
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
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});