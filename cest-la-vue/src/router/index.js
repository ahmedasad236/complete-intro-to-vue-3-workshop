import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
const LoginPage = () => import("@/views/LoginPage.vue");
const UserPage = () => import("@/views/UserPage.vue");
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },

  {
    path: "/user",
    name: "UserPage",
    component: UserPage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
