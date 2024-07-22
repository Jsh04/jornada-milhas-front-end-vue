<template>
    <article class="depoiments-card">
        <div class="depoiments-card__container-image">
            <img :src="depoiment.Foto" alt="">
        </div>
        <div class="depoiments-card__container-description">
            <div class="depoiments-card__description">
                <p class="ff-roboto">{{ depoiment.DescricaoDepoimento }}</p>
            </div>
            <div class="depoiments-card__name"> 
                <p class="ff-roboto">{{ depoiment.Nome }}</p>
            </div>
        </div>
    </article>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Depoiment from '@/domain/entities/Depoiment'

export default defineComponent({
    name: "DepoimentsCardComponent",
    props: {
        depoiment: {
            required: true,
            type: Depoiment
        }
    }
})
</script>

<style scoped>
.depoiments-card{
    display: flex;
    padding: 1rem;
    background: #FEF7FF;
    column-gap: 1rem;
}

.depoiments-card__container-image{
    align-self: flex-start;
}

.depoiments-card__description p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}

.depoiments-card__name p{
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
    color: #1D1B20;
}
.depoiments-card__name{
    margin-top: 0.5rem;
}

.depoiments-card__container-image img{
    width: 56px;
    height: 56px;
}
</style>