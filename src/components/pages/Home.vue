<template>
    <Banner :url-image="urlImageTop"/>
    <div class="container">
        <Filter />
        <Destinations />
        <Depoiments />
    </div>
    <Banner :url-image="urlImageBotton"/>
    <ModalTraveler />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Banner from '../Banner/Banner.vue';
import Filter from '../Filter/Filter.vue';
import Destinations from '../Destinations/Destinations.vue';
import Depoiments from '../Depoiments/Depoiments.vue';
import ModalTraveler from '@/components/modals/ModalTravaler/ModalTraveler.vue';

export default defineComponent({
    name: "HomeComponent",
    components: {
    Banner,
    Filter,
    Destinations,
    Depoiments,
    ModalTraveler
  },
  data() {
    return {
      urlImageBotton: require('@/assets/Imagens/2-Banner-homepage2.png'),
      urlImageTop: require('@/assets/Imagens/Banner-homepage.png'),
    }
  },
});
</script>

<style scoped>
</style>