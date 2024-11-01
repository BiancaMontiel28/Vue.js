<template>
    <div class="app">
        <h1>Vista Combinada</h1>
        <AddTask @task-added="handleTaskAdded" />
        <TaskList :tasks="tasks" @delete-task="handleTaskDelete" />
    </div>
</template>

<script>
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';

export default {
    components: {
        AddTask,
        TaskList,
    },
    data() {
        return {
            tasks: [], // Lista de tareas que se mostrará en TaskList
        };
    },
    methods: {
        handleTaskAdded(newTask) {
            this.tasks.push(newTask); // Añadir la nueva tarea a la lista
        },
        handleTaskDelete(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId); // Eliminar tarea
        },
    },
};
</script>

<style scoped>
/* Estilos aquí... */
</style>
