<template>
    <div class="modalTraveler" :class="ActiveModal ? 'modal-active' : 'modal-desactive'">
        <div class="modalTraveler__title">
            <h2 class="ff-roboto">Viajante</h2>
        </div>
        <div class="modalTraveler__container-filter">
            <FilterQuantityAgr v-for="(filter, index) in ListFiltersAge" @emit-count="getCountAge" :key="index" :idIndex="filter.id" :title="filter.title" :subTitle="filter.subTitle"/>
        </div>
           
        <div class="modalTraveler__container-categoria">
            <div class="modalTraveler__container-categoria-title">
                <p class="ff-roboto">Categoria</p>
            </div>
            <div class="modalTraveler__container-categoria-btns">
                <button :class="[ActiveEconomic ? 'btn-active' : 'btn-desactive']" @click="() => {ActiveEconomic = true, ActiveExecutive = false}" type="button" class="ff-roboto"><i class="las la-check"></i><span>Econômica</span></button>
                <button :class="[ActiveExecutive ? 'btn-active' : 'btn-desactive']" @click="() => {ActiveExecutive = true, ActiveEconomic = false}" type="button" class="ff-roboto"><i class="las la-check"></i><span>Executiva</span></button>
            </div>
            
        </div>
        <div class="modalTraveler__container-btns">
            <button type="button" class="modalTraveler__container-btns-cancel ff-roboto" @click="$emit('desactive-modal', false)">Cancelar</button>
            <button type="button" class="modalTraveler__container-btns-sucess ff-roboto" @click="ApplyFilters()">Aplicar</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterQuantityAgr from '@/components/shared/FilterQuantityAge/FilterQuantityAge.vue'
import FilterInterface from '@/interfaces/DTOs/FilterInterface';
    export default defineComponent({
        name: "ModalComponent",
        components: { 
            FilterQuantityAgr
        },
        props: {
            ActiveModal: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                ListFiltersEmit: [] as FilterInterface[],
                idAdult: "adult",
                idChildren: "children",
                idBabys: "babys",
                ListFiltersAge: [
                    {
                        id: "adultos",
                        title: "Adultos",
                        subTitle: '(Acima de 12 anos)',
                    },
                    {
                        id: "criancas",
                        title: "Crianças",
                        subTitle: '(Entre 2 e 11 anos)',
                    },
                    {
                        id: "bebes",
                        title: "Bebês",
                        subTitle: '(Até 2 anos)',
                    }
                ],
                ActiveEconomic: true,
                ActiveExecutive: false,
                CountAge: {
                    Adult: 0,
                    Children: 0,
                    Babies: 0
                }
            }
        },
        methods: {
            ApplyFilters(){
                
                this.verifyCountFilters();

                if (this.ActiveEconomic) 
                    this.ListFiltersEmit.push({ Name: "Econômica", Count: 0 })
                else
                    this.ListFiltersEmit.push({ Name: "Executiva", Count: 0  })

                this.$emit('list-filters', this.ListFiltersEmit, false)  
            },
            MoutingObj(index: string, countAge: number): FilterInterface{
                if(index == this.idAdult)
                    return { Name: "Adulto", Count: countAge} as FilterInterface
                else if (index == this.idChildren)
                    return { Name: "Crianças", Count: countAge} as FilterInterface
                else if(index == this.idBabys)
                    return { Name: "Bebês", Count: countAge} as FilterInterface
                else
                    return {} as FilterInterface
            },
            verifyCountFilters(){
                if (this.CountAge.Adult != 0) 
                    this.ListFiltersEmit.push(this.MoutingObj(this.idAdult, this.CountAge.Adult));

                if(this.CountAge.Children != 0)
                    this.ListFiltersEmit.push(this.MoutingObj(this.idChildren, this.CountAge.Children));
                if(this.CountAge.Babies != 0)
                    this.ListFiltersEmit.push(this.MoutingObj(this.idBabys, this.CountAge.Babies));
            },

            getCountAge(count: number, indexCurrent: string){
                if (indexCurrent == "adultos") this.CountAge.Adult = count
                else if (indexCurrent == "criancas") this.CountAge.Children = count
                else this.CountAge.Babies = count                
            }
        },
    })
</script>

<style scoped src="./styles/ModalTraveler.css"></style>