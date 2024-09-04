<template>
    <section class="destiny-description">
        <article class="destiny-description__title">
            <h2 class="ff-roboto">Descubra o {{currentDestiny.name}}</h2>
        </article>
        <article class="destiny-description__subtitle ff-roboto">
            <h3>{{ currentDestiny.subtitle }}</h3>
        </article>
        <article class="destiny-description__details">
            <div class="destiny-description__img-container">
                <div class="destiny-description__img">
                    <img src="../../../assets/Imagens/Atacama-destino1.jpg" alt="">
                </div>
                <div class="destiny-description__img">
                    <img src="../../../assets/Imagens/Atacama-destino2.png" alt="" srcset="">
                </div>
            </div>
            <div class="destiny-description__texts">
                <p class="ff-roboto">{{ currentDestiny.descriptionEnglish }}</p>
                <p class="ff-roboto ">{{ currentDestiny.descriptionPortuguese }}</p>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import Destination from '@/domain/entities/Destination';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "DestinyDescription",
    props: {
        currentDestiny: {
            type: Destination,
            required: true,
            default: new Destination()
        }
    },
    data() {
        return {
            
        }
    },

})
</script>

<style scoped>
.destiny-description{
    padding: 3rem 15rem;
}

.destiny-description__title h2{
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: 52px;
    color: black;
}

.destiny-description__subtitle{
    margin-top: 5rem;
}
.destiny-description__subtitle h3{
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    color: black;
}

.destiny-description__details{
    margin-top: 3rem;
    margin-bottom: 5rem;
}

.destiny-description__img-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.destiny-description__img img{
    width: 600px;
    height: 450px;
}

.destiny-description__texts{
    margin-top: 1rem;

}
.destiny-description__texts p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #49454F;
}

.destiny-description__texts p:last-child{
    margin-top: 1.5rem;
}
</style>