import Vue from 'vue';
import Router from 'vue-router';
import FormularioWeb from './components/FormularioWeb.vue';
import VistaUsuarios from './components/VistaUsuarios.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'formulario',
      component: FormularioWeb
    },
    {
      path: '/usuarios',
      name: 'vista-usuarios',
      component: VistaUsuarios
    }
  ]
});
