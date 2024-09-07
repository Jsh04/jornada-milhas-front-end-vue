<template>
    <section class="confirmMail">
        <article class="confirmMail__container">
            <div class="confirmMail__title">
                <h2>{{ textTitle }}</h2>
            </div>
            <template v-if="isConfirmMail" >
                <div class="confirmMail__subtitle">
                    <p class="ff-roboto">{{ subTitle }}</p>
                </div>
                <div class="confirmMail__btn">
                    <button  class="ff-roboto">Já confirmei E-mail</button>
                </div>
            </template>
            <template v-else>
                <div class="confirmMail__subtitle">
                    <p class="ff-roboto">{{ subTitle }}</p>
                </div>
                <div class="confirmMail__btn">
                    <router-link class="ff-roboto" to="/">Voltar para home</router-link>
                </div>
            </template>
            
        </article>
    </section>
</template>

<script lang="ts">
import { useStore } from '../../../store';
import { defineComponent, inject, ref } from 'vue'
import { useRouter } from 'vue-router';
import IAlertModal from '@/application/interfaces/alert/IAlertModal';


export default defineComponent({
    name: "ConfirmMailComponent",
    props: {
        isConfirmMail: {
            required: true,
            type: Boolean
        },
        textTitle: {
            type: String,
            required: true
        },
        subTitle: {
            required: true,
            type: String
        }
    },
    setup () {
        console.log('');
        
    },
})
</script>

<style scoped>
.confirmMail{
    display: flex;
    justify-content: center;
    margin: 10rem 0;
}

.confirmMail__container{
    border-radius: 16px;
    background: #F5F5F5;
    width: 50%;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}

.confirmMail__title h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
}

.confirmMail__subtitle p{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; 
}

.confirmMail__btn button{
    padding:1rem;
    text-align:center;
    color:#fff;
    font-weight:700;
    border-radius:5px;
    background-color:var(--purple-primary);
}

.confirmMail__btn{
    align-self: center;
}
</style>