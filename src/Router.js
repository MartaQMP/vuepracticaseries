import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CrearPersonaje from "./components/CrearPersonaje.vue";
import ModificarPersonaje from "./components/ModificarPersonaje.vue";
import SerieComponent from "./components/SerieComponent.vue";
import PersonajesSerie from "./components/PersonajesSerie.vue";

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/create", component: CrearPersonaje },
    { path: "/update", component: ModificarPersonaje },
    { path: "/serie/:id", component: SerieComponent },
    { path: "/personajes/:id", component: PersonajesSerie },
];

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
});

export default router;
