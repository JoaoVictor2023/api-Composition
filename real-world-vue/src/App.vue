<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home </RouterLink>| <!--RouterLink est un composant global spécifique à Vue Router-->
          <RouterLink to="/about">About</RouterLink>
        </nav>
      
      </div>
    </header>
        
    <RouterView /> <!-- est essentiellement un espace réservé où le contenu de notre composant "view" sera rendu sur la page -->
    
    
  </div>
</template>

<style>
#layout {
  font-family: Arial, Helvetica, Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
