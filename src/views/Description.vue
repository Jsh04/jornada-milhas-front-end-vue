<template>
    <Banner style="height: 100px;" :url-image="urlImage"/>
    <DestinyDescription />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Banner from '@/components/shared/Banner/Banner.vue';
import { useStore } from '@/store';
import Destination from '@/models/Destination';
import DestinyDescription from '@/components/shared/DestinyDescription/DestinyDescription.vue';

export default defineComponent({
    name: "DescriptionComponent",
    components: { Banner, DestinyDescription },
    data() {
        return {
            urlImage: require("@/assets/Imagens/Banner-destino.png"),
            destiny: {
                id: '0',
                name: '',
                pictuteTest: '',
                price: 0.0
            } as Destination | undefined
        }
    },
    mounted() {
        const id = this.$route.params.id;
        const destiny = this.ListDestinys.find(destiny => destiny.id == id)
        this.destiny = destiny;
    },
    setup() {
        const store = useStore()
        return {
            ListDestinys: computed(() => store.state.destinyModule.Destinys)
        }
    },
});
</script>

<style scoped>
</style>