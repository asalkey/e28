<template>
    <div id='ratings'>
        <span v-for='post in posts' :key='post.id'>
            <span v-if='post.post_rating'>
                <router-link :to='{ name: "post", params: {"id" : post.id }}'><h3 data-test="rating-page-post"> {{post.post_title}} </h3></router-link>
                <h5 data-test="rating-page-author"><strong>Review Author:</strong>{{post.post_rating.author}}</h5>
                <p data-test="rating-page-comment"><strong>Comment:</strong>{{post.post_rating.comment}}</p>
                <span data-test="rating-page-score"> <strong> Score: </strong> {{post.post_rating.score}}</span>
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
