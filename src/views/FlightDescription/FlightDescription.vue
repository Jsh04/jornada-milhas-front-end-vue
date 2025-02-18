<template>
    <Banner style="height: 100px;" :url-image="urlImage"/>
    <DestinyDescription :current-destiny="destiny" />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import Banner from '@/components/shared/Banner/Banner.vue';
import Destination from '@/domain/entities/Destination';
import DestinyDescription from '@/views/FlightDescription/DestinyDescription.vue';
import { DestinyController } from '@/presentation/DestinyService';
import IAlertModal from '@/application/interfaces/alert/IAlertModal';

export default defineComponent({
    name: "DescriptionComponent",
    components: { Banner, DestinyDescription },
    data() {
        return {
            urlImage: require("@/assets/Imagens/Banner-destino.png"),
            destiny: {} as Destination | undefined
        }
    },
    methods:{
        async returnDestinyToDescription(){
            const desitnyId = Number(this.$route.params.id);
            const destinyByControllerResult = await this.destinyController.getDestinyById(desitnyId);

            

            this.destiny = destinyByControllerResult;
        }
    },

    async beforeMount() {
        this.returnDestinyToDescription();
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