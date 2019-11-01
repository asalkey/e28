<template>
  <div id="app" v-cloak>
    <h1>I am thinking of a number between 1 and 10</h1>
    <Game></Game>
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'app',
  components: {
    Game
  }
}
</script>

<style>
body{
  font-family:sans-serif;
}

h1{
  font-size:25px;
}

[v-cloak]{
    display:none;
}

</style>
