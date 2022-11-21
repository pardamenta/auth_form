<template>
  <form>
    <h3>Login to your Account</h3>
    <div class="form-group">
      <label for="username">Email Address</label>
      <input
        type="text"
        placeholder="email@example.org"
        id="username"
        v-model="form.email"
        :class="is_email_error ? 'error' : ''"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        placeholder="********"
        id="password"
        v-model="form.password"
        :class="is_pass_error ? 'error' : ''"
      />
    </div>
    <button type="button" @click="login">Log In</button>
  </form>
  <div class="bottom">
    <p>Don't Have an Account?<a href="#">Register</a></p>
    <p>Forgotten your password?<a href="#">Recovery Password</a></p>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";

let is_email_error = ref(false)
let is_pass_error = ref(false)
let form = reactive({
  email: "",
  password: "",
});

let login = () => {
  let error = []
  let error_pass = form.password.length == '' ? "password tidak boleh kosong" : form.password.length < 8 ? "password minimal 8 karakter" : null

  if(form.email == ''){
    error.push({'Error':{'email': 'Email tidak boleh kosong'}})
    is_email_error.value = true
  } else {
    is_email_error.value = false
  }
  if(!/\S+@\S+\.\S+/.test(form.email)) {
    error.push({'Error': {'email': 'harus berupa email'}})
    is_email_error.value = true
  }  else {
    is_email_error.value = false
  }
  if(error_pass != null){
    error.push({'Error': {'password': error_pass}})
    is_pass_error.value=true
  } else {
    is_pass_error.value=false
  }
 
  if(error.length === 0 ) {
    is_email_error.value = false
    is_pass_error.value =false
    //playload to login service
    console.log(JSON.stringify(form))
    fetch('http://api.com/login', {
      method: 'post',
      body: JSON.stringify(form)
    })
  } else {
    console.log(error);
  }
    
};
</script>

<style>
form {
  width: 400px;
  background-color: rgb(243 244 246);
  position: relative;
  border-radius: 3px;
  padding: 50px 35px;
}
form * {
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: rgb(156 163 175);
}

.form-group {
  width: 380px;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

input.error {
  border: 1px solid rgb(244 63 94);
}
::placeholder {
  color: #e5e5e5;
}
button {
  margin-top: 50px;
  width: 100%;
  background-color: #0288d1;
  color: white;
  padding: 15px 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.bottom {
  margin: 30px 10px;
  text-align: center;
}

.bottom p {
  color: rgb(147 197 253);
  font-size: 0.85rem;
}
a {
  padding-left: 10px;
  color: white;
  text-decoration: none;
}
</style>
