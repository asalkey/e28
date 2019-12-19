import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import PostsPage from './components/pages/PostsPage.vue';
import PostPage from './components/pages/PostPage.vue';
import FavesPage from './components/pages/FavesPage.vue';
import RatingsPage from './components/pages/RatingsPage.vue';
import store from './store';
import Vuelidate from 'vuelidate';

const _ = require('lodash')

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage,name:'home' },
    { path: '/posts', component: PostsPage,name:'posts' },
    { path: '/faves', component: FavesPage,name:'faves' },
    { path: '/ratings', component: RatingsPage,name:'ratings' },
    { path: '/post/:id', component: PostPage,name:'post',props:true }
]

const router = new VueRouter({
    routes: routes,
    mode:'history'
})

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
