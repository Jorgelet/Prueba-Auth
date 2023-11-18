<template>
    <h1>Registrado con exito</h1>
    <button @click="logOut">Sign out</button>

</template>

<script setup>
import { useAuth } from "../stores/auth";
import router from '@/router'

const store = useAuth()

const logOut = async () => {
    try {
        await store.outUser()
        router.push({name: 'login'})

    } catch (error) {
        console.error("Error al cerrar sesion del usuario:", error)
    }
}

</script>

<style scoped>
</style>