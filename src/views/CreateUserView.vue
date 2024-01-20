<template>
    <h1 class="main__title">Create account</h1>

    <form class="main__form">
        <div class="form__div">
            <label for="email">Email address</label>
            <input type="email" id="email" class="form__input" placeholder="Email" v-model="email">
        </div>

        <div class="form__div">
            <label for="password">Password</label>
            <input type="password" id="password" class="form__input" placeholder="Password" v-model="password">
        </div>

        <button type="submit" @click.prevent="createUser">Continue</button>
      </form>
    <RouterLink :to="{name: 'login'}">Back</RouterLink>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from "../stores/auth";
import router from '@/router'

const DATA = 121212;

const email = ref("");
const password = ref("");
const store = useAuth()

const createUser = async () => {
  try {
    await store.createUser();

    email.value = ""
    password.value= ""
    router.push({name: 'home'})
  } catch (error) {
    console.error("Error al registrar el usuario:", error)
  }
}
</script>

<style scoped></style>