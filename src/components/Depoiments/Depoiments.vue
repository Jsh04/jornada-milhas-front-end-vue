<template>
    <section class="depoiments">
        <article class="depoiments-title">
            <h2 class="ff-roboto">Depoimentos</h2>
        </article>
        <div class="depoiments__container">
            <DepoimentsCard v-for="(depoiment,index) in ListDepoiment" :depoiment="depoiment" :key="index"/>

        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DepoimentsCard from '../DepoimentsCard/DepoimentsCard.vue'
import Depoiment from '../../models/Depoiment.js';
export default defineComponent({
    name: "DepoimentsComponent",
    components: {DepoimentsCard},
    data() {
        return {
            ListDepoiment: [
                {
                    Nome: "Lauro Matos",
                    DescricaoDepoimento: "A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa.",
                    Foto: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg'
                },
                {
                    Nome: "Talita Magalhães",
                    DescricaoDepoimento: "Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem.",
                    Foto: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg'
                },
                {
                    Nome: "Mariana Faustino",
                    DescricaoDepoimento: "Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada a partir das nossas necessidades.",
                    Foto: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg'
                }
            ] as Depoiment[]
        }
    },
});

</script>

<style scoped>
.depoiments{
    margin-top: 3rem;
    padding: 0rem 2rem;
}

.depoiments-title{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
}

.depoiments__container{
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
}
</style>