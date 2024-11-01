import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CombinedView from '@/views/CombinedView.vue'; // Asegúrate de que la ruta sea correcta
import AddTask from '@/components/AddTask.vue'; // Asegúrate de que la ruta sea correcta
import AboutView from '@/views/AboutView.vue'; // Asegúrate de que la ruta sea correcta
import TaskList from '@/components/TaskList.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/tasklist', // Agregada ruta para la lista de tareas
      name: 'TaskList',
      component: TaskList, // Componente que se cargará en esta ruta
  },
    {
      path: '/combined',
      name: 'CombinedView',
      component: CombinedView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/addtask',
      name: 'AddTask',
      component: AddTask,
    },
    // Puedes añadir más rutas si es necesario
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;