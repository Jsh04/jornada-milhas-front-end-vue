<template>
    <Banner style="height: 100px;" :url-image="urlImage"/>
    <DestinyDescription />
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import Banner from '@/components/shared/Banner/Banner.vue';
import { useStore } from '@/store';
import Destination from '@/domain/entities/Destination';
import DestinyDescription from '@/components/shared/DestinyDescription/DestinyDescription.vue';
import { DestinyController } from '@/presentation/DestinyController';

export default defineComponent({
    name: "DescriptionComponent",
    components: { Banner, DestinyDescription },
    data() {
        return {
            urlImage: require("@/assets/Imagens/Banner-destino.png"),
            destiny: {
                id: 0,
                name: '',
                pictuteTest: '',
                price: 0.0
            } as Destination | undefined
        }
    },
    beforeMount() {
        const id = Number(this.$route.params.id);
        const destiny = this.ListDestinys.find(destiny => destiny.id == id)
        this.destiny = destiny;

        const listDestinies = this.destinyController.getAllDestinies()
    },
    setup() {
        const destinyController = inject<DestinyController>("DestinyController");

        if (!destinyController) 
            throw new Error("Não é possível iniciar a aplicação")
        
        return {
           destinyController
        }
    },
});
</script>

<style scoped>
</style>