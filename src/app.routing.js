import VueRouter from "vue-router";
import HomeComponent from './app/home/home.vue';
import ProjectListComponent from './app/work/project-list/project-list.vue';
import Vue from "vue";


Vue.use(VueRouter);

const router = [
    {
        path: '/home',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/work',
        name: 'work',
        component: ProjectListComponent
    },
    {
        path: '/',
        redirect: '/home'
    }
];

const AppRouting = new VueRouter({
    routes: router
})

export default AppRouting;
