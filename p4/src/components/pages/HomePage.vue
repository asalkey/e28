<template>
    <div>
        <p>Welcome to my webpage</p>
        <router-link :to='{name: "posts"}'> view my posts </router-link>
    </div>
</template>

<script>

export default {
    name: 'HomePage',
    data: function (){
        return{
        }
    }
}

</script>
