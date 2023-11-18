
<template>
  <h1 class="main__title">Sign In</h1>

  <form class="main__form">
    <div class="form__div">
      <label for="email">Email address</label>
      <input type="email" id="email" class="form__input" placeholder="Email" v-model="email">
    </div>

    <div class="form__div">
      <label for="password">Password</label>
      <input type="password" id="password" class="form__input" placeholder="Password" v-model="password">
    </div>

    <button type="submit" @click.prevent="createUser">Sign Up</button>
  </form>
  <RouterLink :to="{name: 'createuser'}">Create account</RouterLink>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from "../stores/auth";
import router from '@/router'


const email = ref("");
const password = ref("");
const store = useAuth()

const createUser = async () => {
  try {
    await store.signUser();

    email.value = ""
    password.value= ""
    router.push({name: 'home'})
  } catch (error) {
    console.error("Error al iniciar session:", error)
  }
}

</script>


<style scoped>
a{
  color: #000;
}
</style>