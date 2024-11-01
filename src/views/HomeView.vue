<template>
  <div class="container mt-5 text-center">
    <h1 class="display-4 text-warning">Aplicación de Tareas con Vue</h1>
    <img src="@/assets/logo.png" alt="logo" class="img-fluid" />
    <p class="lead text-secondary">Gestiona tus tareas fácilmente.</p>
    
    <div class="app-info mt-4">
      <p><strong>Añadir Tarea:</strong> Agrega nuevas tareas manualmente.</p>
      <p><strong>Lista de Tareas:</strong> Ve y gestiona tus tareas.</p>
      <p><strong>Vista Combinada:</strong> Combina las opciones de agregar y ver tareas.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.display-4 {
  font-weight: bold;
}

.lead {
  font-size: 1.2rem;
}

.app-info p {
  font-size: 1rem;
  color: #6c757d;
}
</style>
