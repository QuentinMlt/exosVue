<script setup>
import { ref } from 'vue';
import * as jose from 'jose'
  const compteur = ref(0);

  setInterval(() => {
    compteur.value++
  }, 1000)

  function resetCompteur(){
    compteur.value = 0;
  }
const jwt = ref("");
const claims = ref("");

function decoderClaims(token) {
  claims.value = jose.decodeJwt(token)
}

const saveJWT = ref("")

function saveJwt(jwt) {
  if(!localStorage.getItem('jwt'))
  {
    localStorage.setItem('jwt', jwt);
  }

  saveJWT.value = localStorage.getItem('jwt')
}
</script>

<template>
  <h1>Hello Word</h1>
  <p>{{compteur}}</p>
  <button  @click="resetCompteur()">Reset compteur</button>
  <input type="number" v-model="compteur">

  <h1>Exo3</h1>
  
    <input v-model="jwt" type="text">
    <button @click="decoderClaims(jwt)">decoder les claims</button>


  <p>jwt = {{jwt}}</p>
  <p>jwt claim = {{claims}}</p>


  <h1>Exo4</h1>

  <button @click="saveJwt(jwt)">Sauvegarder JWT</button>

  <p>saveJWT = {{saveJWT}}</p>

</template>

<style>

</style>
