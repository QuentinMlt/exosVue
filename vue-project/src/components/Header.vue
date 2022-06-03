<script setup>

</script>

<template>
  
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h3>Welcome</h3>
    <div class="collapse navbar-collapse ms-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'accueil'}">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'demovfor'}">DemovFor</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'demojwt'}">Demojwt</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">Connexion</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}">Inscription</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>@import 'bootstrap/dist/css/bootstrap.min.css';</style>