<template>
    <div class='post' v-if='post'>
        <router-link data-test='post-link' :to='{ name: "post", params: {"id" : post.id }}'>
            <h1 class='post-title'>{{post.post_title}}</h1>
        </router-link>
        <span class='post-date'>{{post.post_date}}</span>
        <div class='post-content'>{{post.post_content}}</div>
    </div>
</template>

<script>
export default {
    name: 'ShowPost',
    props: ['post'],
    data: function() {
        return {
          
        };
    }
};

</script>

<style scoped>
</style>
