<template>
    <div id='faves'>
        <show-fave
            v-for='fave in faves'
            :key='fave.id'
            :fave='fave'
        ></show-fave>
    </div>
</template>

<script>
import ShowFave from './../ShowFave.vue';
const axios = require('axios');

export default {
    name: 'FavesPage',
    components:{ShowFave},
    data: function (){
        return {
            faves:null,
        }
    },
    mounted() {
        let savedFaves = localStorage.getItem("fave") ? JSON.parse(localStorage.getItem('fave')) : null;
        let favesData = [];
        
        savedFaves.forEach(function(id){
            axios
                .get(
                    'https://my-json-server.typicode.com/asalkey/e28-blog-api/posts/' + id
                )
                .then(response => {
                    favesData.push({id:id,post_title:response.data.post_title});
                });
        });
        
        this.faves = favesData;
    }
}

</script>

<style scoped>
</style>
