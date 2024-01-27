<template>
    <div class="filter__container-age">
        <div class="filter__container-age-title">
            <p class="ff-roboto"> {{ title }} </p>
        </div>
        <div>
            <p> {{ subTitle }}</p>
        </div>
        <div>
            <span @click="ReduceNumber()"><i class="las la-plus-circle"></i></span>
            <span>{{ count }}</span>
            <span @click="count += 1"><i class="las la-minus-circle"></i></span>
        </div>
    
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['title', 'subTitle'],
    name: "FilterQuantityAgrComponent",
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
        }
    }    
})
</script>

<style scoped>
.filter__container-age{
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 0.5rem;
}

.filter__container-age-title p{
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
}
</style>