import { createRouter, createWebHistory } from "vue-router";
import Inicio from "@/views/Inicio.vue"
import LoginLogout from "@/views/LoginLogout.vue"
import Logout from "@/views/Logout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: "/",
      name: "Inicio",
      component: Inicio,
    },
    {
      path: "/Login",
      name: "Iniciar Sesión",
      component: LoginLogout,
    },
    {
      path: "/About",
      name: "Sobre Nosotros",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/SingUp",
      name: "Sing Up",
      component: LoginLogout,
    },
    {
      path: "/Logout",
      name: "Logout",
      component: Logout,
    },
    {
      path: "/TodoList",
      name: "Todo List",
      component: () => import("@/views/TodoList.vue"),
    },
    {
      path: "/ManageTodo",
      name: "Manage Todo",
      component: () => import("@/views/ManageTodo.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: () => ({ name: 'Inicio'}) 
    }
  ],
});

export default router;
