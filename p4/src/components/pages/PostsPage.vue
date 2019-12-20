<template>
    <div id='posts'>
        <h2> Posts </h2>
        <show-post
            v-for='post in posts'
            :key='post.id'
            :post='post'
        ></show-post>
    </div>
</template>

<script>
import ShowPost from './../ShowPost.vue';

export default {
    name: 'PostsPage',
    components:{ShowPost},
    computed: {
        posts: function() {
            return this.$store.state.posts;
        }
    }
}

</script>

<style scoped>
</style>
