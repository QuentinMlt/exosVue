<!-- <script setup>
import { ref } from 'vue';
import * as jose from 'jose'
import axios from 'axios'

  const compteur = ref(0);

  setInterval(() => {
    compteur.value++
  }, 1000)

  function resetCompteur(){
    compteur.value = 0;
  }
const jwt = ref("");
const claims = ref("");

const axiosJWT = ref("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwiaWF0IjoxNjU0MTYzNTk0fQ.V0JN47El7AFBcjExO321JKN3E-LkXk-ha0KhBjzONDQ");
const axiosFromAPI = ref("")
async function getTokenFromAPI(){
        const instance = axios.create({headers: {"X-Auth-Token": axiosJWT.value}});
        const response = await instance.post('http://localhost:3000/loginToken').then(res => res).catch(err => err);
        axiosFromAPI.value = response.request.response;
    }

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

  <h1>Exo 5</h1>

  <button @click="getTokenFromAPI()">Get avec AXIOS</button>

  <p>{{axiosFromAPI}}</p>

</template>

<style>

</style> -->

<!-- <script setup>

import { ref } from 'vue';

const tableau = ref([1,2,3])
const listDObjets =ref([
  {id:0, name:"Alice"},
  {id:1, name:"Bob"},
  {id:2, name:"Arthur"}
])

const nameInput = ref("");
const id = 2
function Add(name) {
  let v = {id: id, name: name}
  listDObjets.value = listDObjets.value.concat(v);
  id++
}

function deleteObj(id) {
  let indexASupprimer = "Not found"

  for(const [index, element] of listDObjets.value.entries()){
    if(element.id === id){
      indexASupprimer = index
      break
    }
  }
  if(indexASupprimer != "Not found"){
    listDObjets.value.splice(indexASupprimer,1)
  }
}

</script>

<template>
  <p v-for="i in tableau">{{i}}</p>
  <ul>
    <li v-for="monObjet in listDObjets" :key="monObjet.id">{{monObjet}}</li>
  </ul>
  <div v-for="monObjet in listDObjets" :key="monObjet.id">
    <h2>{{monObjet.name}}</h2>
    <p>{{monObjet.id}}</p>
    <button @click="deleteObj(monObjet.id)">Supprimer</button>
  </div>

  <input type="text" v-model="nameInput">
  <button @click="Add(nameInput)"> Ajouter {{nameInput}}</button>
</template>

<style>
</style> -->


<script setup>
import { ref } from 'vue';
const user = ref("")

function login(){
  user.value = {
    id: 0,
    name: "Quentin",
    email: "email@gmail.com"
  }   
}

function logout(){
  user.value = "" 
}

</script>

<template>
  <h1>Hello word</h1>
  <hr>
  <h2 v-if='user == ""'>Hello Anonyme</h2>
  <h2 v-if='user != ""'>Hello {{user.name}}</h2>

  <button @click="login()" v-if='user == ""'>Se connecter</button>
  <button @click="logout()" v-if='user != ""'>Se déconnecter</button>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>