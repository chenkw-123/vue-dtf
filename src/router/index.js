import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";
import Index from "../components/Index";
import Addemp from "../components/Addemp";
import Update from "../components/Update";

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name:'Login',
        component: Login,
    },
      {
        path: '/login',
        name:'Login',
        component: Login,
    },
      {
        path: '/register',
        name:'Register',
        component: Register,
    },
      {
        path: '/index',
        name:'Index',
        component: Index,
    },
      {
        path: '/add',
        name:'Addemp',
        component: Addemp,
    },
      {
        path: '/update/:id',
        name:'update',
        component: Update,
    },
  ]
})
