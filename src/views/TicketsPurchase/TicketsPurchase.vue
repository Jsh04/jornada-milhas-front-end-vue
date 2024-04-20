<template>
    <section class="tickets">
        <article class="filter__container">
            <div class="filter__container-clean">
                <div class="filter__container-title">
                    <h2 class="ff-roboto">Filtro</h2>
                </div>
                <div class="filter__container-clean-btn">
                    <button class="ff-roboto"><i class="las icon la-backspace"></i>LIMPAR</button>
                </div>
            </div>
            <FilterContainerCheckbox :ListCheckboxFilter="ListCheckboxFilterStops" :title="titleStops" />
            <hr />
            <FilterContainerCheckbox :ListCheckboxFilter="ListCheckboxFilterCompanies" :title="titleCompanies"/>
            <hr />
            <div class="filter__container-price">
                <div class="filter__container-price-title">
                    <h5 class="ff-roboto">Preço</h5>
                </div>
                <div class="filter__container-price-input">
                    <div class="filter__container-price-input-values">
                        <div class="filter__container-price-value">
                            <p class="ff-roboto">De</p>
                            <p class="ff-roboto">R$200</p>	
                        </div>
                        <div class="filter__container-price-value">
                            <p class="ff-roboto" style="text-align: end;">Até</p>
                            <p class="ff-roboto">R$1500</p>	
                        </div>
                    </div>
                    <div class="filter__container-price-input-container">
                        <input type="range" name="" min="200" max="1500" id="">
                    </div>
                </div>
            </div>
            <div class="filter__container-btn">
                <button class="ff-roboto">Aplicar</button>
            </div>  
        </article>
        
        <article class="cards__container">
            <RecommendationCard v-for="(content, index) in ListCardRecommendation" 
            :key="index" 
            :title="content.title" 
            :value="content.value" 
            :time="content.time" 
            :BackGround="content.BackGround" />
        </article>

        <article class="info-travel__container"> 
            
        </article>
    </section>
</template>

<script lang="ts">
import FilterContainerCheckbox from '@/components/shared/FilterContainerCheckbox/FilterContainerCheckbox.vue';
import ICheckboxFilter from '@/interfaces/ICheckboxFilter';
import RecommendationCard from '@/components/shared/RecommendationCard/RecommendationCard.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name:"TicketsPurchaseComponent",
    components: {FilterContainerCheckbox,RecommendationCard},
    data() {
        return {
            titleStops: "Paradas",
            ListCheckboxFilterStops: [
                {idCheckbox: 'direct', labelTitle: "Direto"},
                {idCheckbox: 'oneConnection', labelTitle: "1 conexão"},
                {idCheckbox: 'twoConnection', labelTitle: "2 paradas"},
                {idCheckbox: 'moreTwoConnection', labelTitle: "3 paradas"},
            ] as ICheckboxFilter[],
            titleCompanies: "Companhias",
            ListCheckboxFilterCompanies: [
                {idCheckbox: 'latam', labelTitle: "Latam"},
                {idCheckbox: 'gol', labelTitle: "Gol"},
                {idCheckbox: 'azul', labelTitle: "Azul"},
                {idCheckbox: 'avianca', labelTitle: "Avianca"},
            ] as ICheckboxFilter[],

            ListCardRecommendation: [
                {title: "Menor preço", value: 430, time: "12h de viagem", BackGround: 'background-color: #F5F5F5;'},
                {title: "Recomendado", value: 500, time: "6h de viagem" , BackGround: 'background-color: #ECE6F0;'},
                {title: "Menor tempo", value: 780, time: "2h de viagem", BackGround: 'background-color: #F7F2FA;'},
            ]
        }
    },
    setup () {
        return {}
    }
})
</script>

<style scoped>

.tickets{
    display: grid;
    grid-template-areas: 
    "filter cards cards cards"
    "filter container container container"
    "filter container container container"
    "filter container container container";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 235px);
    padding: 1rem;
    margin-top: 3rem;
    gap: 2rem;

}

.filter__container{
    grid-area: filter;
    background-color: #F7F2FA;
}

.cards__container{
    grid-area: cards;
    display: flex;
    align-items: start;
    column-gap: 1.5rem;
}

.info-travel__container{
    grid-area: container;
    height: 50%;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
    border-radius: 8px;
    display: flex;
}

</style>
<style src="./styles/TicketsPurchaseFilter.css" scoped></style>
<style src="./styles/TicketsPurchaseFilterPrice.css" scoped></style>