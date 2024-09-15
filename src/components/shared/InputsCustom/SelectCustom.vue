<template>
    <div class="form-input__custom">
        <select
            :value="modelValue"
            :id="idSelect"
            :class="['ff-roboto d-block', classesPerson]"
            @blur="$emit('blur')"
            @click="$emit('click')"
            @change="$emit('change')"
            @input="EmitModelValue($event)"
            >
                <option value="0">Selecione a opção</option>
                <option v-for="(itemSelect, index) in listSelectedGeneric" :key="index" :value="itemSelect.value">{{ itemSelect.name }}</option>
        </select>
        <label class="ff-roboto">{{ labelTitle }}</label>
        <slot>
            <span v-if="errorsValidations.length != 0" class="message_error ff-roboto">
                {{ errorsValidations[0].$message }}
            </span>
        </slot>
        <slot name="customMessageError"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ISelectOption from "@/components/interfaces/ISelectOption";
export default defineComponent({
    name: "SelectCustomComponent",
    props:{
        listSelectedGeneric: {
            type: Array as PropType<ISelectOption[]>,
            required: true
        },
        labelTitle: {
            type: String,
            required: true,
        },
        classesPerson: {
            type: String,
            required: false,
            default: "selected__style",
        },
        errorsValidations: {
            type: Array as PropType<{ $message: string }[]>,
            required: true,
        },
        modelValue: {
            required: true,
        },
        idSelect: {
            type: String,
            required: false,
        },
    },
    emits: ["change", "update:modelValue", "blur"],
})
</script>

<style  scoped>
.selected__style {
    width: calc((530px / 2) - 3rem);
}

.form-input__custom {
    position: relative;
}
.form-input__custom select {
    border: none;
    border: 2px solid #6750a4;
    border-radius: 5px;
    -webkit-appearance: none;
    outline: none;
    padding: 15px 20px;
    font-size: 12px;
    margin-bottom: 0.5rem;
}

.form-input__custom select {
    border: 2px solid #6750a4;
}

.form-input__custom option:first-child {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;
    color: #cac4d0;
}

.form-input__custom label {
    pointer-events: none;
    position: absolute;
    top: -0.5rem;
    left: 15px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    background-color: white;
    padding: 0 0.5rem;
    box-sizing: border-box;
}
</style>