<template>
    <div id="post-page" v-if='post'>
        <h1 class='post-title'>{{post.post_title}}</h1>
        <span class='post-date'>{{post.post_date}}</span>
        <div class='post-content'>{{post.post_content}}</div>
        <button class='btn btn-primary' @click='fave(post.id)'> add to faves </button>
        <router-link :to='{ name: "posts"}'> Back to all posts</router-link>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'PostPage',
    props: ['id'],
    computed: {
        post: function() {
            return this.$store.getters.getPostByID(this.id);
        }
    },
    methods: {
        fave: function (id) {
            let faves = new app.Faves();
            faves.create(id);
        }
  }
};
</script>

<style scoped>
</style>
