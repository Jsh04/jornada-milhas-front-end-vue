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
        </article>
        
        <article class="cards__container">
            <p>cards</p>
        </article>

        <article class="info-travel__container"> 
            <p>container</p>
        </article>
    </section>
</template>

<script lang="ts">
import FilterContainerCheckbox from '@/components/shared/FilterContainerCheckbox/FilterContainerCheckbox.vue';
import ICheckboxFilter from '@/interfaces/ICheckboxFilter';
import { defineComponent } from 'vue'
export default defineComponent({
    name:"TicketsPurchaseComponent",
    components: {FilterContainerCheckbox},
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
    grid-template-rows: repeat(4, 200px);
    padding: 1rem;
    margin-top: 3rem;

}

.filter__container{
    grid-area: filter;
    background-color: #F7F2FA;
}

.cards__container{
    grid-area: cards;
    background-color: blue;
}

.info-travel__container{
    grid-area: container;
    background-color: green;
}

</style>
<style src="./styles/TicketsPurchaseFilter.css" scoped></style>