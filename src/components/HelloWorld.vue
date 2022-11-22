<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>Welcome To Login Page</h1>
  <div class="link">
    <router-link to="/login">Please Login</router-link>
  </div>
  
</template>

<style scoped>
h1 {
  color: #eee;
}
.link{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  background-color: rgb(147 197 253);
  height: 20px;
  width: 100px;
  padding:15px 15px;
  display: block;
  border-radius: 0.7rem;
  color: #4B4453;
  
}
</style>
