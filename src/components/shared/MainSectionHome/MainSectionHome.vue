<template>
    <Destinations />
    <Depoiments />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Destinations from '../Destinations/Destinations.vue';
import Depoiments from '../Depoiments/Depoiments.vue';


export default defineComponent({
    name: "MainSectionHomeComponent",
    components: { 
        Destinations,
        Depoiments
    }
})
</script>

<style scoped>

</style>