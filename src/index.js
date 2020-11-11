import Vue from 'vue';
import AppComponent from './app.vue';
import router from './app.routing.js';
import vuexStore from './core/vuex/vuex-store.js';
require('./core/style/index.scss');

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    router,
    store: vuexStore,
    render: (h) => h(AppComponent)
}).$mount(root);