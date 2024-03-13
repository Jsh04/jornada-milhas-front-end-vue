<template>
    <section class="filter">
        <article class="filter__container">
            <div class="filter__container-title">
                <h2 class="filter__container-title-content ff-roboto">Passagens</h2>
            </div>
            <div class="filter__container-application">
                <div class="filter__container-btns-go-back">
                    <button type="button" :class="[ActiveGoAngBack ? 'btn-active' : 'btn-desactive']" id="goAndBack" @click="[ActiveGo = false, ActiveGoAngBack = true ]" class="ff-roboto" ><i v-show="ActiveGoAngBack" class="las la-check"></i><span >Ida e volta</span></button>
                    <button type="button" :class="[ActiveGo ? 'btn-active' : 'btn-desactive']" id="go" @click="[ActiveGoAngBack = false, ActiveGo = true ]" class="ff-roboto"><i v-show="ActiveGo" class="las la-check"></i><span >Somente ida</span></button>
                </div>
                <div v-if="LengthOfArrayFilters == 0" class="filter__container-button">
                    <button type="button" class="ff-roboto" @click="ShowModal()">Aplicar Filtro</button>
                </div>
                <template v-else >
                    <div class="filter__container-description" v-for="(filter, index) in ListFilters" :key="index">
                        <div class="ff-roboto">
                            <i class="las la-check"></i>
                            {{ ReturnCount(filter.Count) }} {{ filter.Name }}
                        </div>
                    </div>
                </template>
            </div>
            <div class="filter__container-search">
                <div class="filter__container-inputs">
                    <div class="filter__container-inputs-content">
                        <i class="las la-plane-departure f-style-icon"></i>
                        <input type="text" class="ff-roboto" name="" id="" placeholder="Origem">
                        <i class="las la-search f-style-icon"></i>
                    </div>
                    <i class="las la-sync f-style-icon"></i>
                    <div class="filter__container-inputs-content">
                        <i class="las la-plane-arrival f-style-icon"></i>
                        <input type="text" class="ff-roboto" name="" id="" placeholder="Destino">
                        <i class="las la-search f-style-icon"></i>
                    </div>
                </div>
                <div class="filter__container-dates">
                    <div class="filter__dates-input">
                        <input
                          type="date"
                          class="ff-roboto"
                          placeholder="XX/XX/XXXX"
                        />
                        <label class="ff-roboto">Data de ida</label>
                    </div>
                    <div class="filter__dates-input">
                        <input
                          type="date"
                          class="ff-roboto"
                          placeholder="XX/XX/XXXX"
                        />
                        <label class="ff-roboto">Data de volta</label>
                    </div>

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
    props: ['ListFilters'],
    computed:{
        LengthOfArrayFilters(): number{
            return this.ListFilters.length
        }
    },
    data() {
        return {
            ActiveGoAngBack: false,
            ActiveGo: true,
            ActiveModal: false,
        }
    },
    methods: {
        ShowModal(){
            this.ActiveModal = !this.ActiveModal
            this.$emit('active-modal-filter', this.ActiveModal)
        },
        ReturnCount(count: number | undefined){
            if(count == undefined || count == 0) return ""
            else return count
        }
    },
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

.filter__container-description{
    display: flex;
    column-gap: 1rem;
}
.filter__container-description div{
    padding: 0.35rem 0.5rem;
    border-radius: 16px;
    border: 1px solid #79747E;
    cursor: pointer;
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
}

</style>
<style src="./styles/FilterSearch.css"></style>
<style src="./styles/FilterApplication.css"></style>