import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import PostsPage from './components/pages/PostsPage.vue';
import PostPage from './components/pages/PostPage.vue';
import FavesPage from './components/pages/FavesPage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: HomePage,name:'home' },
    { path: '/posts', component: PostsPage,name:'posts' },
    { path: '/faves', component: FavesPage,name:'faves' },
    { path: '/post/:id', component: PostPage,name:'post',props:true }
]

const router = new VueRouter({
    routes: routes,
    mode:'history'
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
