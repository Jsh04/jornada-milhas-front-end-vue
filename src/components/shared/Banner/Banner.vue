<template>
    <div :style="{backgroundImage: 'url( '+ urlImage +')'}" class="banner">
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BannerComponent",
    props: ['urlImage'],
    data() {
        return {
            
        }
    },
})
</script>

<style scoped>
.banner{
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
}

</style>