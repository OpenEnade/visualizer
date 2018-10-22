import Vue from 'vue';
import Router from 'vue-router';
import CourseSelector from './components/CourseSelector.vue';
import Courses from './views/Courses.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/courses',
            name: 'courses',
            component: Courses,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/course-selector',
            name: 'course-selector',
            component: CourseSelector,
        },
    ],
});
