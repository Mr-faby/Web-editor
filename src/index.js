import Vue from 'vue';
import AppComponent from './app.vue';
import router from './app.routing.js';


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    router,
    render: (h) => h(AppComponent)
}).$mount(root);