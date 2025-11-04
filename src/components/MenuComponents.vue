<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <img class="navbar-brand" src="@/assets/images/batman.png" style="width: 50px" />
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/create">Nuevo Personaje</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/update">Modificar Personaje</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <p class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Series</p>
                            <ul class="dropdown-menu">
                                <li v-for="serie in series" :key="serie">
                                    <router-link class="dropdown-item" :to="'/serie/' + serie.idSerie">{{ serie.nombre }}</router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";

const service = new ServiceSeries();
export default {
    name: "MenuComponents",
    data() {
        return {
            series: [],
        };
    },
    mounted() {
        service.buscarSeries().then(result => {
            this.series = result;
        });
    },
};
</script>

<style scoped></style>
