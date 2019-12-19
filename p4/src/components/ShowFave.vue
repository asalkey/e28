<template>
    <div class='fave' v-if='post'>
        <router-link :to='{ name: "post", params: {"id" : post.id }}'>
            <h1 class='post-title'>{{post.post_title}}</h1>
            <button @click='removeFromFaves(post.id)'>Remove</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ShowFave',
    props: ['post'],
    data: function() {
        return {
          
        };
    },
    methods: {
    }
};

</script>

<style scoped>
</style>
