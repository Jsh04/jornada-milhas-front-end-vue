<template>
  <Banner :url-image="UrlImage" style="height: 100px" />
  <FormRegister :is-admin-register="false" :title="title"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Banner from "@/components/shared/Banner/Banner.vue";
import FormRegister from "@/components/shared/FormRegister/FormRegister.vue"
export default defineComponent({
  name: "RegisterComponent",
  components: { Banner, FormRegister },
  data() {
    return {
      UrlImage: require("@/assets/Imagens/4-Banner-cadastro.png"),
      title: 'Crie sua conta'
    }
  },
  methods: {
    
  },

});
</script>
