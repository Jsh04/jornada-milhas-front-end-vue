<template>
    <div class="filter__container-age">
        <div class="filter__container-age-title">
            <p class="ff-roboto"> {{ title }} </p>
        </div>
        <div>
            <p class="ff-roboto"> {{ subTitle }}</p>
        </div>
        <div class="filter__container-age-number">
            <span @click="ReduceNumber()" class="filter__container-age-btn"><i class="las la-minus-circle" style="font-size: 20px;"></i></span>
            <span class="ff-roboto">{{ count }}</span>
            <span @click="$emit('emitCount', count += 1, idIndex)" class="filter__container-age-btn"><i class="las la-plus-circle" style="font-size: 20px;"></i></span>
        </div>
    
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['title', 'subTitle', "idIndex"],

    name: "FilterQuantityAgrComponent",

    emits: ['emitCount'],
    data(){
        return {
            count: 0
        }
    },
    methods: {
        ReduceNumber(){
            if (this.count <= 0) 
                this.count = 0
            else
                this.count--  

            this.$emit('emitCount', this.count, this.idIndex)
        }
    }    
})
</script>

<style scoped>
.filter__container-age{
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 140px;
    row-gap: 1rem;
}

.filter__container-age-title p{
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
}

.filter__container-age-number{

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filter__container-age-btn{
    background-color: var(--gray-secondary);
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
}
</style>