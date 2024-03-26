<template>
    <ConfirmMailSection :isConfirmMail="false" :textTitle="titleSection" :subTitle="subTitle" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConfirmMailSection from '../components/shared/ConfirmMailSection/ConfirmMailSection.vue';

ConfirmMailSection

export default defineComponent({
    components: {ConfirmMailSection},
    data() {
        return {
            titleSection: 'Obrigado por Confirmar Seu E-mail!',
            subTitle: 'Agradecemos do fundo do coração por confirmar seu e-mail e embarcar nesta incrível Jornada Milhas conosco. Estamos empolgados por ter você a bordo enquanto exploramos novos horizontes e criamos memórias inesquecíveis juntos!'
        }
    },

})
</script>

<style scoped>

</style>