<template>
  <div class="container">
    <p>Create your account</p>
    <div class="form-group">
      <label for="first name">First Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Jojo"
        required
        v-model="form.firstname"
      />
    </div>
    <div class="form-group">
      <label for="last name">Last Name</label>
      <input
        type="text"
        class="form-control"
        placeholder="Shidig"
        required
        v-model="form.lastname"
      />
    </div>
    <div class="form-group">
      <label for="last name">Email Addres</label>
      <input
        type="emai"
        class="form-control"
        placeholder="email@example.org"
        required
        v-model="form.email"
      />
    </div>
    <div class="form-group">
      <label for="last name">Password</label>
      <input
        type="password"
        class="form-control error"
        placeholder="********"
        required
        v-model="form.password"
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
  <p class="text">Already have an account? <a href="#">Sign In</a></p>
</template>
<script setup>
import { reactive, ref } from "vue";
let is_error = ref(false);
let form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
});

let register = () => {
  let error = [];
  let error_pass =
    form.password.length == ""
      ? "password tidak boleh kosong"
      : form.password.length < 8
      ? "password minimal 8 karakter"
      : null;
  let error_first = form.firstname.length == "" ? "firstname tidak boleh kosong" : null;
  let error_last = form.lastname.length == "" ? "lastname tidak boleh kosng" : null;
  if (error_first != null) error.push({ Error: { firstname: error_first } });
  if (error_last != null) error.push({ Error: { lastname: error_last } });
  if (form.email == "") error.push({ Error: { email: "Email tidak boleh kosong" } });
  if (!/\S+@\S+\.\S+/.test(form.email))
    error.push({ Error: { email: "harus berupa email" } });
  if (error_pass != null) error.push({ Error: { password: error_pass } });

  if (error.length === 0) {
    //send payload to register service
    console.log(JSON.stringify(form));

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
