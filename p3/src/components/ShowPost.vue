<template>
    <div class='post' v-if='post'>
        <router-link :to='{ name: "post", params: {"id" : post.id }}'>
            <h1 class='post-title'>{{post.post_title}}</h1>
        </router-link>
        <span class='post-date'>{{post.post_date}}</span>
        <div class='post-content'>{{post.post_content}}</div>
        <button class='btn btn-primary' @click='fave(post.id)'> add to faves </button>
    </div>
</template>

<script>
export default {
    name: 'ShowPost',
    props: ['post'],
    data: function() {
        return {
          
        };
    },
    methods: {
        fave: function (postID) {
            let faves = localStorage.getItem("fave") ? JSON.parse(localStorage.getItem('fave')) : [];
            
            if(faves.includes(postID)){
                alert("This post is already in your faves");
                return;
            }
            
            faves.push(postID);
            
            localStorage.setItem("fave", JSON.stringify(faves));
        }
  }
};

</script>

<style scoped>
</style>
