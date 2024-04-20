<template>
    <div class="payment-describe-details">
        <span class="ff-roboto">{{ describe }}</span>
        <span class="ff-roboto">{{ value }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TextDescribePaymentComponent',
    props: {
        describe: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
});
</script>

<style scoped>
.payment-describe-details{
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}

.payment-describe-details span{
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
</style>