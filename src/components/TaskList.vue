<template>
  <div class="container mt-4">
    <!-- Título -->
    <h1 class="text-center text-dark mb-4">Lista de Tareas</h1>

    <!-- Botón para cargar tareas desde la API -->
    <button @click="fetchTasks" class="btn-outline-dark mb-3">
      Cargar Tareas
    </button>

    <!-- Mostrar las tareas traídas de la API -->
    <div v-if="tasks.length === 0" class="text-center">No hay tareas disponibles.</div>
    <ul class="list-group">
      <li v-for="task in tasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span :class="{ completed: task.completed }">{{ task.todo }}</span>
        <div>
          <button @click="toggleTaskCompletion(task)" class="btn btn-success btn-sm">
            {{ task.completed ? 'Desmarcar' : 'Completar' }}
          </button>
          <button @click="deleteTask(task)" class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      tasks: [], // Almacenamiento de tareas traídas de la API
    };
  },
  methods: {
    fetchTasks() {
      fetch("https://dummyjson.com/todos")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error en la red");
          }
          return response.json();
        })
        .then((data) => {
          this.tasks = data.todos; // Almacenar las tareas en el arreglo 'tasks'
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    },
    toggleTaskCompletion(task) {
      task.completed = !task.completed; // Alternar el estado de la tarea (completado/no completado)
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id); // Eliminar la tarea de la lista local
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  padding: 20px;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
</style>