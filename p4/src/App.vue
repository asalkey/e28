<template>
  <div id="app" class="container-fluid">
    <div class="row flex-xl-nowrap">
        <div div class="col-12">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <li v-for='link in links' :key='link' class='nav-item'>
                        <router-link :to='{name: link}' class='nav-link' exact>{{ link }}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="row flex-xl-nowrap">
        <div class="col-12">
            <div class="d-flex justify-content-center">
                <router-view></router-view>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function (){
        return {
            page: 'home',
            links: ['home', 'posts','faves','ratings']
        }
  },
  mounted() { 
        this.$store.dispatch('setPosts');
  }
}
</script>

<style></style>
