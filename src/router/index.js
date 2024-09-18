import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomePage,
      },
      { path: "signup", name: "SignUp", component: SignUpPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
