<template>
  <div id="app">
    <img id="logo" alt="ZipFoods logo" src="./assets/images/zipfoods-logo.png">
    <nav>
        <ul>
            <li v-for='link in links' :key='link'>
                <router-link :to='paths[link]' exact>{{ link }}</router-link>
            </li>
        </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import {products} from './products.js';

export default {
  name: 'app',
  data: function (){
        return {
            /* Default page to start with */
            page: 'home',
            /* Store links in an array to maintain order */
            links: ['home', 'products', 'categories'],
            paths: {
                home: '/',
                products: '/products',
                categories: '/categories'
            },
            products:products
        }
    }
}
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
