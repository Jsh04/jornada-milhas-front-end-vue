<template>
    <div class="banner">

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BannerComponent"
})
</script>

<style scoped>
.banner{
    background-image: url('../../assets/Banner-homepage.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
}

</style>