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
            <div class="info-travel__describe-container">
                <div class="info-travel__describe-title">
                    <h3>Ida e Volta</h3>
                </div>
                <hr />
                <div class="info-travel__destinys">
                    <ContainerTextCustom :text="DestinyFromTest" :title="titleFrom"/>
                    <ContainerTextCustom :text="DestinyToTest" :title="titleTo"/>
                </div>
                <hr />
                <div class="info-travel__time">
                    <ContainerTextCustom :text="DateFrom" :title="titleDateFrom"/>
                    <ContainerTextCustom :text="DateTo" :title="titleDateTo"/>
                </div>
            </div>
            <div class="info-travel__payment-container">
                <div class="info-travel__payment-price">
                    <span class="ff-roboto">R$500</span>
                </div>
                <div class="info-travel__payment-describe">
                    <TextDescribePayment :describe="'1 adulto, econômica'" :value="'R$420'"/>
                    <TextDescribePayment :describe="'Taxa de embarque'" :value="'R$60'"/>
                    <hr>
                    <div class="info-travel__payment-total">
                        <span class="ff-roboto">
                            <strong>Total</strong>
                        </span>
                        <span class="ff-roboto">
                            <strong>R$500</strong>
                        </span>
                    </div>
                    <div class="info-travel__payment-methods" >
                        <span>
                            10% de desconto no Pix
                        </span>
                        <span>
                            ou
                        </span>
                        <span>
                            12x no cartão de crédito
                        </span>
                    </div>
                </div>
                <div class="info-travel__payment-btn">
                    <button class="ff-roboto">Comprar</button>
                </div>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import FilterContainerCheckbox from '@/components/shared/FilterContainerCheckbox/FilterContainerCheckbox.vue';
import ICheckboxFilter from '@/interfaces/ICheckboxFilter';
import RecommendationCard from '@/components/shared/RecommendationCard/RecommendationCard.vue';
import ContainerTextCustom from '@/components/shared/ContainerTextCustom/ContainerTextCustom.vue';
import TextDescribePayment from '@/components/shared/TextDescribePayment.vue'
import { defineComponent } from 'vue';
export default defineComponent({
    name:"TicketsPurchaseComponent",
    components: 
    {
        FilterContainerCheckbox,
        RecommendationCard,
        ContainerTextCustom,
        TextDescribePayment
    },
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
                {idCheckbox: 'compania1', labelTitle: "Compania1"},
                {idCheckbox: 'compania2', labelTitle: "Compania2"},
                {idCheckbox: 'compania3', labelTitle: "Compania3"},
                {idCheckbox: 'compania4', labelTitle: "Compania4"},
            ] as ICheckboxFilter[],

            ListCardRecommendation: [
                {title: "Menor preço", value: 430, time: "12h de viagem", BackGround: 'background-color: #F5F5F5;'},
                {title: "Recomendado", value: 500, time: "6h de viagem" , BackGround: 'background-color: #ECE6F0;'},
                {title: "Menor tempo", value: 780, time: "2h de viagem", BackGround: 'background-color: #F7F2FA;'},
            ],
            titleFrom: 'Origem',
            titleTo: 'Destino',
            DestinyFromTest: 'Rio de Janeiro (RJ)',
            DestinyToTest: 'Belo Horizonte (BH)',
            titleDateFrom: 'Ida',
            DateFrom: '12/02',
            titleDateTo: 'Volta',
            DateTo: '15/04',
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




</style>
<style src="./styles/TicketsPurchaseFilter.css" scoped></style>
<style src="./styles/TicketsPurchaseFilterPrice.css" scoped></style>
<style src="./styles/TicketsPurchaseInfoTraveler.css" scoped></style>