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
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import DestinationsCard from '../DestinationsCard/DestinationsCard.vue';

    export default defineComponent({
        name: "DestinationsComponent",
        components: { DestinationsCard },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        setup(){
            const store = useStore()
            return {
                store,
                ListDestiantions: computed(() => store.state.destinyModule.Destinys)
            }
        }
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