import VueRouter from "vue-router";
import HomeComponent from './app/home/home.vue';
import WorkComponent from './app/work/work.vue';
import ProjectListComponent from './app/work/project-list/project-list.vue';
import DevComponent from './app/work/dev/dev.vue';
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
        component: WorkComponent,
        children: [
            {
                path: '',
                redirect: 'list'
            },
            {
                path: 'list',
                name: 'list',
                component: ProjectListComponent
            },
            {
                path: 'dev/:id',
                name: 'dev',
                component: DevComponent,
                props: true
            }
        ]
    },
    {
        path: '/',
        redirect: '/home',
    }
];

const AppRouting = new VueRouter({
    routes: router
})

export default AppRouting;
