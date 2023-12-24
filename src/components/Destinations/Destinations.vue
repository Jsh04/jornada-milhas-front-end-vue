<template>
    <section class="destinations">
    <article class="destinations-title">
            <h2 class="ff-roboto">Destinos</h2>
    </article>
    <div class="destinations__cards">
        <DestinationsCard v-for="(destination, index) in ListDestiantions" :destination="destination" :key="index" />
    </div>
        
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DestinationsCard from '../DestinationsCard/DestinationsCard.vue';
import Destination from '../../models/Destination.js';

    export default defineComponent({
        name: "DestinationsComponent",
        components: { DestinationsCard },
        data() {
            return {
                ListDestiantions: [
                    {
                        Name: 'Atacama',
                        Price: 500.00,
                        PictuteTest: require('@/assets/Imagens/Card-Atacama.png')

                    } as Destination,
                    {
                        Name: 'Veneza',
                        Price: 500.00,
                        PictuteTest: require('@/assets/Imagens/Card-Veneza.png')
                    } as Destination,
                    {
                        Name: 'Patagonia',
                        Price: 500.00,
                        PictuteTest: require('@/assets/Imagens/Card-Patagonia.png')

                    } as Destination,
                    {
                        Name: 'Grand Canyon',
                        Price: 500.00,
                        PictuteTest: require('@/assets/Imagens/Card-Grand-Canyon.png')

                    } as Destination,
                    {
                        Name: 'Turquia',
                        Price: 500.00,
                        PictuteTest: require('@/assets/Imagens/Card-Turquia.png')
                    } as Destination,
                    {
                        Name: 'Cordilheira dos Andes',
                        Price: 500.00,
                        PictuteTest: require('@/assets/Imagens/Card-Cordilheira-dos-Andes.png')

                    } as Destination
                ]
            }
        },
        methods: {
            
        },
    })
</script>

<style scoped>

.destinations{
    margin-top: 3rem;
    padding: 0rem 2rem;
}

.destinations-title{
    margin: 3rem 0;
}
.destinations-title h2{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
}
.destinations__cards{
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    gap: 2rem;
}
</style>