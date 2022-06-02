<script setup>
import { ref } from 'vue';

  const compteur = ref(0);

  setInterval(() => {
    compteur.value++
  }, 1000)

  function resetCompteur(){
    compteur.value = 0;
  }

</script>

<template>
  <h1>Hello Word</h1>
  <p>{{compteur}}</p>
  <button  @click="resetCompteur()">Reset compteur</button>
  <input type="number" v-model="compteur">
</template>

<style>

</style>
