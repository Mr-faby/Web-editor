import Vue from 'vue';
import AppComponent from './app.vue';
import router from './app.routing.js';
import vuexStore from './core/vuex/vuex-store.js';
import Toasted from 'vue-toasted';
require('./core/style/index.scss');
require('./core/style/form.scss');

const root = document.createElement('div');
document.body.appendChild(root);

Vue.use(Toasted);

new Vue({
    router,
    store: vuexStore,
    render: (h) => h(AppComponent)
}).$mount(root);