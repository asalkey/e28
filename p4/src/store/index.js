import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        },
        updatePost(state, payload) {
            _.merge(state.posts, payload)
        }
    },
    actions: {
        setPosts(context) {
            app.axios.get(app.config.api + '/posts.json').then(response => {
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
