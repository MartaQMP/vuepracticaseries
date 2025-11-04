<template>
  <MenuComponents/>
  <router-view/>
</template>

<script>
import MenuComponents from './components/MenuComponents.vue';

export default {
  name: 'App',
  components: {
    MenuComponents
  }
}
</script>

<style>
#div1 {
    margin: auto;
    margin-top: 2%;
    width: 80%;
    text-align: center;
}
h1 {
    color: white;
    background-color: black;
    padding: 2%;
    border-radius: 5px;
    width: 80%;
    margin: auto;
    margin-top: 3%;
    text-align: center;
}
</style>
