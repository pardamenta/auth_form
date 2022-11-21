<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <router-view />
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
body {
  background-color: #0288D1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}

</style>
