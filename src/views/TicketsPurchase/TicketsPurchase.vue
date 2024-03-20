<template>
    <section class="tickets">
        <article class="filter__container">
            <p>Filter</p>
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
import { defineComponent } from 'vue'

export default defineComponent({
    name:"TicketsPurchaseComponent",

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
    "filter";
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 100px 300px 100px;
}

.filter__container{
    grid-area: filter;
}

.cards__container{
    grid-area: cards;
}

.info-travel__container{
    grid-area: container;
}

</style>