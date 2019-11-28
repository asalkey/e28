<template>
    <div class='fave' v-if='fave'>
        <router-link :to='{ name: "post", params: {"id" : fave.id }}'>
            <h1 class='post-title'>{{fave.post_title}}</h1>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ShowFave',
    props: ['fave'],
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
