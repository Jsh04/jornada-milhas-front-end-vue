<template>
  <DestinyForm :is-edit="false" :title="title" />    
</template>

<script lang="ts">

import DestinyForm from '@/components/shared/DestinyForm/DestinyForm.vue';
import { defineComponent } from 'vue';



export default defineComponent({
    name: "DestinyRegisterComponent",
    components: {DestinyForm},
    data() {
      return {
        title: "Cadastre um novo destino"
      }
    },
    
})

</script>

<style scoped>


</style>
<style src="@/components/shared/FormRegister/styles/RegisterInput.css" ></style>