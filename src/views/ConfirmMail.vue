<template>
    <ConfirmMailSection :isConfirmMail="true" :textTitle="titleText" :subTitle="subTitle"/>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ConfirmMailSection from '../components/shared/ConfirmMailSection/ConfirmMailSection.vue';
export default defineComponent({
    name: "ConfirmMailComponent",
    data() {
        return {
            titleText: 'Confirme Seu E-mail' ,
            subTitle: 'Obrigado por se cadastrar. Para começar a explorar as vantagens da Jornada Milhas, por favor, confirme seu endereço de e-mail, porém se já confirmou, é só clicar nesse botão abaixo:'
        }
    },
    components: {ConfirmMailSection}

})
</script>

<style scoped>

</style>