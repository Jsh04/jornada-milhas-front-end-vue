<template>
    <section class="filter">
        <article class="filter__container">
            <div class="filter__container-title">
                <h2 class="filter__container-title-content ff-roboto">Encontre seu próximo destino</h2>
            </div>
            <div class="filter__container-search">
                <div class="filter__container-input">
                    <input type="text" name="filter" id="filter" class="ff-roboto" placeholder="Origem">
                </div>
                <div class="filter__container-button">
                    <button class="ff-roboto" type="button">Buscar</button>
                </div>
            </div>

        </article>
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: "FilterComponent",
    data() {
        return {

        }
    },
    methods:{

    }    
})

</script>

<style scoped> 

.filter{
    background-color: var(--gray-primary);
    margin-top: 3rem;
    padding: 2rem;
    border-radius: 10px;
    min-width: 400px;
}

.filter__container-title-content{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
}

.filter__container-search{
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin-top: 2.5rem;
    width: 100%;
}

.filter__container-input {
    background-color: transparent;
    border: 1px solid black;
    padding: 1rem 2rem;
    border-radius: 5px;
    width: 100%;
}

.filter__container-input input{
    width: 100%;
    height: inherit;
    background-color: transparent;
    border: none;
    outline: none;

}

.filter__container-input input::placeholder{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;
    font-family: 'Roboto';
}

.filter__container-button button{
    border-radius: 5px;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
    color: white;
    background-color: var(--purple-primary);
    border: none;
}

</style>