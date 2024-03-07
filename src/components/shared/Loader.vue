<template>
    <div :class="[isActive ? 'overlay': '']">
        <div :class="[isActive ? 'loader-lg': '']"></div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        isActive: {

            required: true
        }
    },
    name: "LoaderComponent"
})
</script>

<style scoped>
.loader-lg{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border: 4px solid black;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 2s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  } 
</style>