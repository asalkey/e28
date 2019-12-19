<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark flex-column flex-md-row bg-dark">
        <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li v-for='link in links' :key='link' class='nav-item'>
                <router-link :to='{name: link}' class='nav-link' exact>{{ link }}</router-link>
            </li>
        </ul>
    </nav>
    <div class='container'>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function (){
        return {
            page: 'home',
            links: ['home', 'posts','faves']
        }
  },
  mounted() { 
        this.$store.dispatch('setPosts');
  }
}
</script>

<style></style>
