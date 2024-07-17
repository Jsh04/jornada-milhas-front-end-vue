<template>
    <Banner :url-image="urlImageTop"/>
    <LoaderPassages v-if="LoadingSearch" ></LoaderPassages>
    <div v-else class="container__jornada">
        <Filter @active-modal-filter="(activeModal) => ActiveModal = activeModal " :ListFilters="ListFilters" />
        <router-view></router-view>
    </div>
    <Banner :url-image="urlImageBotton"/>
    <ModalTraveler @list-filters="GetListFilters" :ActiveModal="ActiveModal" @desactive-modal="(activeModal) => ActiveModal = activeModal"/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Banner from '@/components/shared/Banner/Banner.vue';
import Filter from '@/components/shared/Filter/Filter.vue';
import ModalTraveler from '@/components/modals/ModalTravaler/ModalTraveler.vue';
import FilterInterface from '@/interfaces/FilterInterface';
import LoaderPassages from '@/components/shared/LoaderPassages/LoaderPassages.vue';

export default defineComponent({
    name: "HomeComponent",
    components: {
    Banner,
    Filter,
    ModalTraveler,
    LoaderPassages
  },
  data() {
    return {
      urlImageBotton: require('@/assets/Imagens/2-Banner-homepage2.png'),
      urlImageTop: require('@/assets/Imagens/Banner-homepage.png'),
      ActiveModal: false,
      ListFilters: [] as FilterInterface[],
      LoadingSearch: false
    }
  },
  methods: {

    GetListFilters(listFilters: FilterInterface[], activeModal: boolean){
      this.ListFilters = listFilters;
      this.ActiveModal = activeModal
    }
  },
});
</script>

<style scoped>
</style>