<template>
    <div id='faves'>
        <div v-if='items.length == 0'>No faves</div>
        <div v-else-if='posts.length > 0'>
            <span v-for='item in items' :key='item'>
                <router-link :to='{ name: "post", params: {"id" : item }}'>
                    <h1 class='post-title'>{{getFave(item)['post_title']}}</h1>
                </router-link>
                <button @click='removeFave(item)'>Remove</button>
            </span>
        </div>
    </div>
</template>

<script>
import * as app from './../../app.js';

export default {
    name: 'FavesPage',
    data: function() {
        return {
            items: [],
            cart: null,
        };
    },
    methods: {
        getFave(postID) {
            return this.posts.find(({ id }) => id === postID);
        },
        removeFave: function(postID) {
            this.faves.remove(postID);
        }
    },
    computed: {
        posts: function() {
            return this.$store.state.posts;
        }
    },
    mounted() {
        this.faves = new app.Faves();
        
        this.items = this.faves.getFaves();
    }
}

</script>

<style scoped>
</style>
