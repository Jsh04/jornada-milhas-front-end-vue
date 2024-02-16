<template>
    <DestinyForm :is-edit="true" :title="title" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DestinyForm from '@/components/shared/DestinyForm/DestinyForm.vue';

export default defineComponent({
    components: {DestinyForm},
    name:"DestinyEditComponent",
    data() {
        return {
            title: "Edite um destino"
        }
    },
})

</script>

<style></style>