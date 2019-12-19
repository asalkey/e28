import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        favorites: [],
        posts: [],
        comments: [],
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        }
    },
    actions: {
        setPosts(context) {
            app.axios.get(app.config.api + 'posts').then(response => {
                context.commit('setPosts', response.data)
            });
        }
    },
    getters: {
        getPostByID(state) {
            return function (id) {
                return state.posts.find(post => post.id == id);
            }
        }
    }
})
