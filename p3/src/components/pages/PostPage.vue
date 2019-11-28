<template>
    <div id="post-page" v-if='post'>
        <h1 class='post-title'>{{post.post_title}}</h1>
        <span class='post-date'>{{post.post_date}}</span>
        <div class='post-content'>{{post.post_content}}</div>
        <router-link :to='{ name: "posts"}'> Back to all posts</router-link>
    </div>
</template>

<script>
const axios = require('axios');
export default {
    name: 'PostPage',
    props: ['id'],
    data: function() {
        return {
            post: null
        };
    },
    mounted() {
        axios
            .get(
                'https://my-json-server.typicode.com/asalkey/e28-blog-api/posts/' +
                    this.id
            )
            .then(response => {
                this.post = response.data;
            });
    }
};
</script>

<style scoped>
</style>
