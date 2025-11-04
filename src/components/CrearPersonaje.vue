<template>
    <div id="div1">
        <h1>Crear Personaje</h1>
        <form v-on:submit.prevent="crearPersonaje()">
            <label class="form-label">Nombre:</label>
            <input class="form-control" v-model="personaje.nombre" />
            <label class="form-label">Imagen:</label>
            <input class="form-control" v-model="personaje.imagen" />
            <label class="form-label">Serie:</label>
            <select class="form-select" v-model="personaje.idSerie">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{ serie.nombre }}</option>
            </select>
            <button class="btn btn-success">Crear</button>
        </form>
    </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";

const service = new ServiceSeries();
export default {
    name: "CrearPersonaje",
    data() {
        return {
            series: [],
            personaje: {
                idPersonaje: 0,
                nombre: "",
                imagen: "",
                idSerie: "",
            },
        };
    },
    mounted() {
        service.buscarSeries().then(result => {
            this.series = result;
        });
    },
    methods: {
        crearPersonaje() {
            service.crearPersonaje(this.personaje).then(() => {
                this.$router.push("/personajes/" + this.personaje.idSerie);
            });
        },
    },
};
</script>

<style scoped></style>
