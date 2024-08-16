<template>
    <section class="destinations">
    <article class="destinations-title">
            <h2 class="ff-roboto">Destinos</h2>
    </article>
    <div class="destinations__cards">
        <DestinationsCard v-for="(destination, index) in listDestination" :destination="destination" :key="index" />
    </div>
        
    </section>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { useStore } from '@/store'
import DestinationsCard from '../DestinationsCard/DestinationsCard.vue';
import Destination from '@/domain/entities/Destination';

    export default defineComponent({
        name: "DestinationsComponent",
        components: { DestinationsCard },
        data() {
            return {
                listDestination:  
                [
                    {
                        id: 1,
                        name: 'Atacama',
                        price: 500.00,
                        pictuteTest: require('@/assets/Imagens/Card-Atacama.png'),
                        subtitle: 'A desert of wonder and awe.',
                        descriptionPortuguese: 'Além de suas maravilhas naturais, o Atacama oferece uma ampla variedade de atividades e experiências para os viajantes desfrutarem. Os entusiastas de aventura podem embarcar em excursões emocionantes, como a prática de sandboard nas dunas colossais ou fazer trilhas até as deslumbrantes lagoas turquesa escondidas no deserto. As fontes termais oferecem uma oportunidade perfeita para relaxar e rejuvenescer em meio ao ambiente árido. Os entusiastas da cultura podem explorar o rico patrimônio das comunidades indígenas que habitam a região há séculos, aprendendo sobre suas tradições, artesanato e modo de vida. Além disso, a proximidade do Atacama com a costa do Pacífico permite um itinerário diversificado, combinando a experiência no deserto com visitas a encantadoras cidades costeiras e praias. Se você busca aventuras cheias de adrenalina, beleza natural serena ou imersão cultural, o Atacama oferece uma jornada notável e inesquecível que atende aos desejos de cada viajante.',
                        descriptionEnglish: "Beyond its natural wonders, Atacama offers a wide range of activities and experiences for travelers to indulge in. Adventure enthusiasts can embark on thrilling excursions such as sandboarding down the colossal dunes or hiking to the stunning turquoise lagoons nestled within the desert. The geothermal springs provide a perfect opportunity to relax and rejuvenate amidst the arid surroundings. Cultural enthusiasts can explore the rich heritage of the indigenous communities that have inhabited the region for centuries, learning about their traditions, crafts, and way of life. Additionally, Atacama's proximity to the Pacific coast allows for a diverse itinerary, combining the desert experience with visits to charming coastal towns and beaches. Whether you seek adrenaline-pumping adventures, serene natural beauty, or cultural immersion, Atacama offers a remarkable and unforgettable journey that caters to every traveler's desires."
                        
                    } as Destination,
                    {
                        id: 2,
                        name: 'Veneza',
                        price: 500.00,
                        pictuteTest: require('@/assets/Imagens/Card-Veneza.png')
                    } as Destination,
                    {
                        id: 3,
                        name: 'Patagonia',
                        price: 500.00,
                        pictuteTest: require('@/assets/Imagens/Card-Patagonia.png')

                    } as Destination,
                    {
                        id: 4,
                        name: 'Grand Canyon',
                        price: 500.00,
                        pictuteTest: require('@/assets/Imagens/Card-Grand-Canyon.png')

                    } as Destination,
                    {
                        id: 5,
                        name: 'Turquia',
                        price: 500.00,
                        pictuteTest: require('@/assets/Imagens/Card-Turquia.png')
                    } as Destination,
                    {
                        id: 6,
                        name: 'Cordilheira dos Andes',
                        price: 500.00,
                        pictuteTest: require('@/assets/Imagens/Card-Cordilheira-dos-Andes.png')

                    } as Destination
                ]as Destination[]

            }
        },
        methods: {
            
        },
        setup(){
            const store = useStore()
            return {
                store,
                
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