<template>
    <div class="modalTraveler">
        <div class="modalTraveler__title">
            <h2 class="ff-roboto">Viajante</h2>
        </div>
        <div class="modalTraveler__container-filter">
            <FilterQuantityAgr v-for="(filter, index) in ListFilters" :key="index" :title="filter.title" :subTitle="filter.subTitle"/>
        </div>
           
        <div>

        </div>
        <div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterQuantityAgr from '@/components/shared/FilterQuantityAge/FilterQuantityAge.vue'
    export default defineComponent({
        name: "ModalComponent",
        components: { 
            FilterQuantityAgr
        },
        data() {
            return {
                ListFilters: [
                    {
                        title: "Adultos",
                        subTitle: '(Acima de 12 anos)',
                    },
                    {
                        title: "Crianças",
                        subTitle: '(Entre 2 e 11 anos)',
                    },
                    {
                        title: "Bebês",
                        subTitle: '(Até 2 anos)',
                    }
                ]
            }
        },
        
    })
</script>

<style scoped>
.modalTraveler{
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 45%;
    background-color: white;
    padding: 2rem;
    width: 520px;
    height: 320px;
    border-radius: 10px;
    border: 1px solid black;
}

.modalTraveler__title h2{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
}

.modalTraveler__container-filter{
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>