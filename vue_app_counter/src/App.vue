<template>
  <HelloWorld/>
  <img alt="Vue logo" src="./assets/logo.png">
  <TextC />

</template>

<script setup >
import TextC from './components/multi-word.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
