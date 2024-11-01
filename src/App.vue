<template>
  <div id="app">
    <nav class="navbar bg-dark">
      Aplicacion de Tareas
      <router-link class="navbar-brand" to="/">
        Gestor de Tareas
      </router-link>

      <!-- Elementos de navegación -->
      <div class="nav-links">
        <router-link class="nav-link" to="/addtask">Añadir Tarea</router-link>
        <router-link class="nav-link" to="/tasklist">Lista de Tareas</router-link>
        <router-link class="nav-link" to="/combined">Vista Combinada</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #007bff;
  color: white;
}

.navbar-brand {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffeb3b;
}

.nav-link.router-link-exact-active {
  color: #ffeb3b;
}
</style>