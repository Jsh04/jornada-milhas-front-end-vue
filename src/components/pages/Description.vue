<template>
    <Banner style="height: 100px;" :url-image="urlImage"/>
    
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Banner from '../Banner/Banner.vue';
import { useStore } from '@/store';
import Destination from '@/models/Destination';

export default defineComponent({
    name: "DescriptionComponent",
    components: { Banner },
    data() {
        return {
            urlImage: require("@/assets/Imagens/Banner-destino.png"),
            destiny: {
                Id: 0,
                Name: '',
                PictuteTest: '',
                Price: 0.0
            } as Destination | undefined
        }
    },
    mounted() {
        const id = Number(this.$route.params.id);
        const destiny = this.ListDestinys.find(destiny => destiny.Id == id)
        this.destiny = destiny;
    },
    setup() {
        const store = useStore()
        return {
            ListDestinys: computed(() => store.state.destinys)
        }
    },
});
</script>

<style scoped>
</style>