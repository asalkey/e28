<template>
    <div id='ratings'>
        <span v-for='post in posts' :key='post.id'>
            <span v-if='post.post_rating'>
                <router-link :to='{ name: "post", params: {"id" : post.id }}'><h3> {{post.post_title}} </h3></router-link>
                <h5><strong>Review Author:</strong>{{post.post_rating.author}}</h5>
                <p><strong>Comment:</strong>{{post.post_rating.comment}}</p>
                <span> <strong> Score: </strong> {{post.post_rating.score}}</span>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'RatingsPage',
    computed: {
        posts: function() {
            return this.$store.state.posts;
        }
    }
}

</script>

<style scoped>
</style>
