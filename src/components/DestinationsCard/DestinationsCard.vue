<template>
    
    <article class="destinations-card">
        <div class="destinations-card__container-img">
            <img :src="destination.pictuteTest" alt="" srcset="">
        </div>
        <div class="destinations-card__container-info">
            <p class="destinations-card__info-name ff-roboto">{{ destination.name }}</p>
            <p class="destinations-card__info-price ff-roboto">R$ {{ destination.price }}</p>
            <button class="destinations-card__info-show-details ff-roboto">ver detalhes</button>
        </div>
    </article>

</template>

<script lang="ts">
import Destination from '@/models/Destination';
import { defineComponent } from 'vue'

    export default defineComponent({
        name: "DestinationCardComponent",
        props: {
            destination: {
                required: true,
                type: Destination
            }
        }
    })
</script>

<style scoped>
.destinations-card{
    display: flex;
    padding-bottom: 1.5rem;
    border-radius: 12px;
    flex-direction: column;
    border: 1px solid  #CAC4D0;
    background: #FEF7FF;
}

.destinations-card__container-img img{
    border-radius: 12px 12px 0 0;
    width: 100%;
}

.destinations-card__container-info{
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
}
.destinations-card__info-name{
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; 
    color: black;
}

.destinations-card__info-price{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
}

.destinations-card__info-show-details{
    border-radius: 5px;
    background: var(--purple-primary);
    height: 50px;
    color: white;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
}
</style>