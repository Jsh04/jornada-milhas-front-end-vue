<template>
   <div class="custom-container-text">
        <p class="ff-roboto">{{ title }}</p>
        <span class="ff-roboto">{{ text }}</span> 
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ContainerTextCustomComponent',
    props: {
        text: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        
        }
    }
});
</script>

<style scoped>
.custom-container-text p{
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
}
.custom-container-text span{
    border-radius: 8px;
    background: #F7F2FA;
    padding: 1rem;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    box-sizing: border-box;
}
</style>