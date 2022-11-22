<template>
  <div class="container">
    <p>Create your account</p>
    <div class="form-group">
      <label for="first name">First Name</label>
      <input
        type="text"
        class="form-control"
        :class="is_err_firstname ? 'error' : ''"
        placeholder="Jojo"
        required
        v-model="form_register.firstname"
      />
    </div>
    <div class="form-group">
      <label for="last name">Last Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Shidig"
        required
        v-model="form_register.lastname"
        :class="is_err_lastname ? 'error' : ''"
      />
    </div>
    <div class="form-group">
      <label for="last name">Email Addres</label>
      <input
        type="emai"
        class="form-control"
        placeholder="email@example.org"
        required
        :class="is_err_email ? 'error' : ''"
        v-model="form_register.email"
      />
    </div>
    <div class="form-group">
      <label for="last name">Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="********"
        required
        v-model="form_register.password"
        :class="is_err_password ? 'error' : ''"
      />
    </div>

    <div class="form-group">
      <input type="checkbox" />
      <span class="txt-check">
        To Register with us please tick to agree to our
        <p>Term and Conditions.</p>
      </span>
    </div>
    <div class="form-group">
      <button type="button" @click="register">Register</button>
    </div>
  </div>
  <p class="text">Already have an account? <a href="/login">Sign In</a></p>
</template>
<script setup>
import { reactive, ref, onMounted } from "vue";
let is_err_firstname = ref(false);
let is_err_lastname = ref(false);
let is_err_email = ref(false);
let is_err_password = ref(false);
let form_register = reactive({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});

let register = () => {
  let error = [];
  let error_pass =
    form_register.password.length == ""
      ? "password tidak boleh kosong"
      : form_register.password.length < 8
      ? "password minimal 8 karakter"
      : null;
  let error_first = form_register.firstname.length == "" ? "firstname tidak boleh kosong" : null;
  let error_last = form_register.lastname.length == "" ? "lastname tidak boleh kosng" : null;

  if (error_first != null) {
    error.push({ Error: { firstname: error_first } });
    is_err_firstname.value = true
  } 
  if (error_last != null){
     error.push({ Error: { lastname: error_last } });
     is_err_lastname.value = true
  }
  if (form_register.email == ""){
     error.push({ Error: { email: "Email tidak boleh kosong" } });
     is_err_email.value = true
  }
  if (!/\S+@\S+\.\S+/.test(form_register.email)){
    error.push({ Error: { email: "harus berupa email" } });
    is_err_email.value = true
  }
    
  if (error_pass != null){
    error.push({ Error: { password: error_pass } });
    is_err_password.value = true
  } 

  if (error.length === 0) {
    //send payload to register service
    console.log(JSON.stringify(form));

    is_err_firstname.value = false
    is_err_lastname.value = false
    is_err_email.value = false
    is_err_password.value = false

    fetch("http://api.com/register", {
      method: "post",
      body: JSON.stringify(form),
    });
  } else {
    console.log(error);
  }
};
</script>
<style>
.container {
  width: 100%;
  max-width: 430px;
  background-color: rgb(243 244 246);
  position: relative;
  border-radius: 3px;
  padding: 50px 35px;
}
.container p {
  margin: 15px 10px;
  font-size: 1.6rem;
}

.form-group {
  width: 400px;
  margin-bottom: 10px;
}
.form-group input {
  border: none;
  width: 100%;
}

input.error {
  border: 1px solid rgb(244 63 94);
}

input[type="checkbox"] {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 20px;
}

input[type="checkbox"]:checked:before {
  position: absolute;
}

.txt-check {
  position: relative;
  margin-left: 30px;
  top: 8px;
  font-size: 0.9rem;
}

.txt-check p {
  position: relative;
  font-size: 0.9rem;
  margin-left: 30px;
  display: flex;
  top: -10px;
  color: rgb(96 165 250);
}
.form-group button {
  margin-top: 5px;
  border: none;
}
.text {
  padding-top: 40px;
  text-align: center;
  color: rgb(191 219 254);
}
</style>
