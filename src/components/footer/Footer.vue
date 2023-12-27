<template>
    <footer class="footer">
        <div class="footer__container-info">
            <div class="footer__container-img">
                <img src="../../assets/Logo/Logo-branco-com-tagline.png" alt="">
            </div>
            <div class="footer__container-texts">
                <p class="ff-roboto">Horário de atendimento: 08h - 20h (Segunda a Sábado)</p>
                <p class="ff-roboto">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
            </div>
        </div>
        <div class="footer__container-networks">
            <div class="footer__container-text-network">
                <p class="ff-roboto">Acesse nossas redes:</p>
            </div>
            <div class="footer__container-list-networks">
                <ul>
                    <li><img src="../../assets/Icones/Whatsapp-1-(2).png" alt=""></li>
                    <li><img src="../../assets/Icones/Instragam-1-(2).png" alt=""></li>
                    <li><img src="../../assets/Icones/Twiter-1-(2).png" alt=""></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "FooterComponent",
    data() {
        return {
            
        }
    },
    methods: {
        
    },
})
</script>

<style scoped>

.footer{
    background-color: #1D1B20;
    padding: 5rem 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__container-img {
    margin-bottom: 1rem;
}
.footer__container-img img{
    width: 161.839px;
    height: 40px;
}


.footer__container-texts p{
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
}

.footer__container-text-network p{
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}
.footer__container-list-networks ul{
    display: flex;
    justify-content: space-evenly;
    
}

.footer__container-list-networks{
    margin-top: 1rem;
}
.footer__container-list-networks ul li{
    display: inline-block;
}
.footer__container-list-networks ul li img{
    width: 32px;
    height: 32px;
}
</style>