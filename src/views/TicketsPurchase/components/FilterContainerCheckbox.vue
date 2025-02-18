<template>
    <div class="filter-container-chekcbox">
        <div class="filter-container-chekcbox__container-title">
            <h3 class="ff-roboto">{{ title }}</h3>
        </div>
        <div class="filter-container-chekcbox__container-filters">
            <CheckboxFilter v-for="(filter, index) in ListCheckboxFilter" :key="index" :idCheckbox="filter.idCheckbox" :titleLabel="filter.labelTitle" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CheckboxFilter from '../CheckboxFilter/CheckboxFilter.vue';
import ICheckboxFilter from '@/views/TicketsPurchase/interfaces/ICheckboxFilter';

export default defineComponent({
    name:"FilterContainerCheckboxComponent",
    components: {CheckboxFilter},
    props: {
        title: {
            type: String,
            required: true
        },
        ListCheckboxFilter: {
            type: Array as PropType<ICheckboxFilter[]>,
            required: true
        }
    },
    setup () {
        return {}
    }

}) 
</script>

<style scoped>

.filter-container-chekcbox{
    padding: 1rem 0;
}

.filter-container-chekcbox__container-title h3{
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
}
.filter-container-chekcbox__container-filters{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-top: 2rem;
}
</style>