<template>
    <div class="card-recommendation" :style="BackGround">
       <div class="card-recommendation__content">
            <p class="ff-roboto">{{ title }}</p>
       </div>
       <div class="card-recommendation__value">
            <p class="ff-roboto">R$ {{ value }}</p>
       </div>
       <div class="card-recommendation__time">
            <p class="ff-roboto">{{ time }}</p>
       </div>
    </div>
</template>

<script lang="ts">
import Util from '@/util/Util';
import { defineComponent } from 'vue';

export default defineComponent({
    props:{
        title: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        BackGround: {
            type: String,
            default: 'background-color: #fff;'
        }
    },
    name: 'RecommendationCardComponent',
    methods:{
        ReturnFormatMoney(valueDouble: number){
            return Util.FormatMoney(valueDouble.toString());
        }
    }
    
});
</script>

<style scoped>
.card-recommendation{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
    justify-content: center;
    height: 100%;
    width: 33%;
    box-sizing: border-box;
    border-radius: 10px;
}
.card-recommendation__content p{
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
}

.card-recommendation__value p{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
}

.card-recommendation__time p{
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
}
</style>