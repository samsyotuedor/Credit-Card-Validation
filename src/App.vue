<template>
  <div id="app">
  <cardValid />
  </div>
</template>

<script>
import cardValid from './components/cardValid.vue'

export default {
  name: 'App',
  components: {
    cardValid
  }
}
</script>

<style>
body{
 
    background: linear-gradient(
        rgba(15, 15, 46, 0.8),
        rgba(0, 0, 0, 0.0)
    ),url('./assets/darkbackground.jpg');
    /* background-image: url(./assets/backg2.jpg); */
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
