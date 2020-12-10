import Vue from 'vue';
import AppComponent from './app.vue';
import router from './app.routing.js';
import vuexStore from './core/vuex/vuex-store.js';
import Toasted from 'vue-toasted';
require('./core/style/index.scss');
require('./core/style/form.scss');

const root = document.createElement('div');
document.body.appendChild(root);

//set title or icon
const head = document.getElementsByTagName('head')[0];
if(head){
    const linkLabel = document.createElement('link');
    linkLabel.setAttribute('rel','stylesheet');
    linkLabel.setAttribute('type','text/css');
    linkLabel.setAttribute('href','favicon.ico');
    head.appendChild(linkLabel);
}
document.title = "web editor";

Vue.use(Toasted);

new Vue({
    router,
    store: vuexStore,
    render: (h) => h(AppComponent)
}).$mount(root);