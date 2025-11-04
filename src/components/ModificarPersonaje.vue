<template>
    <div id="div1">
        <h1>Modificar Personaje</h1>
        <form v-on:submit.prevent="modificarPersonaje()">
            <label class="form-label">Elige la serie:</label>
            <select v-model="this.idSerie" class="form-select">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{ serie.nombre }}</option>
            </select>
            <label class="form-label">Elige el personaje:</label>
            <select v-model="this.idPersonaje" class="form-select">
                <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">{{ personaje.nombre }}</option>
            </select>
            <button class="btn btn-info">Modificar</button>
        </form>
    </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";
import Swal from "sweetalert2";

const service = new ServiceSeries();
export default {
    name: "ModificarPersonaje",
    data() {
        return {
            series: [],
            personajes: [],
            idSerie: "",
            idPersonaje: "",
        };
    },
    mounted() {
        service.buscarPersonajes().then(result => {
            this.personajes = result;
        });
        service.buscarSeries().then(result => {
            this.series = result;
        });
    },
    methods: {
        modificarPersonaje() {
            Swal.fire({
                title: "Quieres guardar los cambios?",
                showDenyButton: true,
                confirmButtonText: "Guardar",
                denyButtonText: `No Guardar`,
            }).then(result => {
                if (result.isConfirmed) {
                    service.actualizarPersonaje(this.idPersonaje, this.idSerie).then(result => {
                        if (result === 200) {
                            Swal.fire("Guardado!", "", "success");
                            this.$router.push("/personajes/" + this.idSerie);
                        }
                    });
                } else if (result.isDenied) {
                    Swal.fire("Los cambios no han sido guardados", "", "info");
                }
            });
        },
    },
};
</script>

<style scoped></style>
