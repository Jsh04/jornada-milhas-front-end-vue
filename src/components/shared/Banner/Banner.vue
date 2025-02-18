<template>
    <div :style="{backgroundImage: 'url( '+ urlImage +')'}" class="banner">
        
    </div>
</template>

<script setup lang="ts">
defineProps({
    urlImage: String,
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