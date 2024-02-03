<template>
    <Banner :url-image="UrlImage" style="height: 100px" />
    <FormRegister :is-admin-register="true" :title="title" />
</template>

<script lang="ts">
import Banner from '@/components/Banner/Banner.vue';
import FormRegister from '@/components/shared/FormRegister/FormRegister.vue';

import { defineComponent } from 'vue'

export default defineComponent({
    name: "RegisterAdminComponent",
    components: {FormRegister, Banner},
    data() {
        return {
            UrlImage: require("@/assets/Imagens/5-Banner-pesquisa.png"),
            title: "Cadastre um Funcionário"
        }
    },
    methods: {
        
    },
})

</script>

<style></style>