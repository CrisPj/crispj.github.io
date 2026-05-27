import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/index.vue";
import Blog from "../pages/blog.vue";
import Contacto from "../pages/contacto.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/blog", component: Blog },
    { path: "/contacto", component: Contacto },
  ],
});
