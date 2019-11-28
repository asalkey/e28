<template>
    <div id='posts'>
        <show-post
            v-for='post in posts'
            :key='post.id'
            :post='post'
        ></show-post>
    </div>
</template>

<script>
import ShowPost from './../ShowPost.vue';
const axios = require('axios');

export default {
    name: 'PostsPage',
    components:{ShowPost},
    data: function (){
        return {
            posts:null,
        }
    },
    mounted() {
        axios
            .get(
                'https://my-json-server.typicode.com/asalkey/e28-blog-api/posts'
            )
            .then(response => {
                this.posts = response.data;
            });
    }
}

</script>

<style scoped>
</style>
