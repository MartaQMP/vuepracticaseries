<template>
    <div id="div1">
        <div v-if="serie" style="border: 1px solid black; width: 70%; margin: auto">
            <img :src="serie.imagen" style="width: 300px" />
            <h2>{{ serie.nombre }}</h2>
            <p>{{ serie.puntuacion }}</p>
            <router-link class="btn btn-success" style="width: 100%" :to="'/personajes/' + serie.idSerie">Personajes</router-link>
        </div>
    </div>
</template>

<script>
import ServiceSeries from "@/services/ServiceSeries";

const service = new ServiceSeries();
export default {
    name: "SerieComponent",
    data() {
        return {
            serie: null,
        };
    },
    mounted() {
        service.buscarSerieID(this.$route.params.id).then(result => {
            this.serie = result;
        });
    },
    watch: {
        "$route.params.id"(oldVal, nextVal) {
            if (oldVal !== nextVal) {
                service.buscarSerieID(this.$route.params.id).then(result => {
                    this.serie = result;
                });
            }
        },
    },
};
</script>

<style scoped></style>
