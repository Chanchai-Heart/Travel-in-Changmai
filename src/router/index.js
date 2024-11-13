import { createRouter, createWebHistory } from "vue-router";
import home from "../components/content/home.vue";
import login from "../components/content/login.vue";
import Popular from "../components/content/popular.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/popular",
        name: "popular",
        component: Popular
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes,

});
export default router