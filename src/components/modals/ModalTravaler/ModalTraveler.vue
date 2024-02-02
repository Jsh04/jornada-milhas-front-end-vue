<template>
    <div class="modalTraveler">
        <div class="modalTraveler__title">
            <h2 class="ff-roboto">Viajante</h2>
        </div>
        <div class="modalTraveler__container-filter">
            <FilterQuantityAgr v-for="(filter, index) in ListFilters" :key="index" :title="filter.title" :subTitle="filter.subTitle"/>
        </div>
           
        <div class="modalTraveler__container-categoria">
            <div class="modalTraveler__container-categoria-title">
                <p class="ff-roboto">Categoria</p>
            </div>
            <div class="modalTraveler__container-categoria-btns">
                <button :class="[ActiveEconomic ? 'btn-active' : 'btn-desactive']" @click="ChooseCategory('economic')" type="button" class="ff-roboto"><i class="las la-check"></i><span>Econômica</span></button>
                <button :class="[ActiveExecutive ? 'btn-active' : 'btn-desactive']" @click="ChooseCategory('executive')" type="button" class="ff-roboto"><i class="las la-check"></i><span>Executiva</span></button>
            </div>
            
        </div>
        <div class="modalTraveler__container-btns">
            <button type="button" class="modalTraveler__container-btns-cancel ff-roboto">Cancelar</button>
            <button type="button" class="modalTraveler__container-btns-sucess ff-roboto">Aplicar</button>
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
                ],
                ActiveEconomic: true,
                ActiveExecutive: false
            }
        },
        
        methods: {
            ChooseCategory(typeBtn: string){
                if (typeBtn == 'economic') {
                    this.ActiveEconomic = true
                    this.ActiveExecutive = false
                }else{
                    this.ActiveExecutive = true
                    this.ActiveEconomic = false
                }
            }
        },
    })
</script>

<style scoped src="./styles/ModalTraveler.css">

</style>