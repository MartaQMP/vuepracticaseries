<template>
    <div id="div1">
        <router-link class="btn btn-danger" :to="'/serie/' + this.$route.params.id">Volver</router-link>
        <h2>Personajes de {{ this.$route.params.id }}</h2>
        <table class="table table-striped" v-if="personajes.length !== 0">
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="personaje in personajes" :key="personaje">
                    <td>{{ personaje.nombre }}</td>
                    <td><img :src="personaje.imagen" style="width: 100px" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";

const service = new ServiceSeries();
export default {
    name: "PersonajesSerie",
    data() {
        return {
            personajes: [],
        };
    },
    mounted() {
        service.buscarPersonajesPorSerie(this.$route.params.id).then(result => {
            this.personajes = result;
        });
    },
    watch: {
        "$route.params.id"(oldVal, nextVal) {
            if (oldVal !== nextVal) {
                service.buscarPersonajesPorSerie(this.$route.params.id).then(result => {
                    this.personajes = result;
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
