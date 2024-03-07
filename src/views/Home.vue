<template>
    <Banner :url-image="urlImageTop"/>
    <div class="container__jornada">
        <Filter @active-modal-filter="ActiveModalEvent" :ListFilters="ListFilters" />
        <Destinations />
        <Depoiments />
    </div>
    <Banner :url-image="urlImageBotton"/>
    <ModalTraveler @list-filters="GetListFilters" :ActiveModal="ActiveModal" @desactive-modal="ActiveModalEvent"/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Banner from '@/components/shared/Banner/Banner.vue';
import Filter from '@/components/shared/Filter/Filter.vue';
import Destinations from '@/components/shared/Destinations/Destinations.vue';
import Depoiments from '@/components/shared/Depoiments/Depoiments.vue';
import ModalTraveler from '@/components/modals/ModalTravaler/ModalTraveler.vue';
import FilterInterface from '@/interfaces/FilterInterface';

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
      ActiveModal: false,
      ListFilters: [] as FilterInterface[]
    }
  },
  methods: {
    ActiveModalEvent(activeModal: boolean){
      this.ActiveModal = activeModal
    },
    GetListFilters(listFilters: FilterInterface[], activeModal: boolean){
      this.ListFilters = listFilters;
      this.ActiveModal = activeModal
    }
  },
});
</script>

<style scoped>
</style>