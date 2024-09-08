<template>
    <div class="form-input__custom">
        <input
            :type="typeInput"
            :class="['ff-roboto', classesPerson]"
            :placeholder="placeHolderInput"
            :id="idInput"
            :value="modelValue"
            @blur="$emit('blur')"
            @click="$emit('click')"
            @change="$emit('change')"
            @input="EmitModelValue($event)" 
        />
        <label class="ff-roboto">{{ labelTitle }}</label>
        <slot name="errorsInput"></slot>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "CustomInputComponent",
    props: {
        typeInput: {
            type: String,
            required: true,
            default: "text",
            validator: function (value: string)  {
                if (!value || value == '') 
                    return false
                return true;
            }
        },
        classesPerson: {
            type: String,
            required: false,
             default: "input__style"
        },
        placeHolderInput: {
            type: String, 
            required: false,
        },
        idInput: {
            type: String, 
            required: false,
        },
        modelValue:{},
        labelTitle: {
            type: String, 
            required: true
        }
    },
    emits: ['click', 'change', 'update:modelValue', 'blur'],
    methods:{
        EmitModelValue(event: Event){
            const targetInput = event.target as HTMLInputElement;
            this.$emit("update:modelValue", targetInput.value);
        }
    }
});

</script>

<style scoped>
.input__style{
    width: calc((530px / 2) - 3rem);
}

.form-input__custom{
    position: relative;  
}
  
.form-input__custom input, .form-input__custom select{
  border: none;
  border: 2px solid #6750A4;
  border-radius: 5px;
  -webkit-appearance: none;
  outline: none;
  padding: 15px 20px;
  font-size: 12px;
  margin-bottom: 0.5rem;
}

.form-input__custom input:focus, .form-input__custom select:focus{
  border: 2px solid #6750A4;
}

.form-input__custom input::placeholder, .form-input__custom option:first-child{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.035px;
  color: #CAC4D0;
}

.form-input__custom label{
  pointer-events: none;
  position: absolute;
  top: -0.5rem;
  left: 15px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; 
  background-color: white;
  padding: 0 .5rem;
  box-sizing: border-box;
}


.form-input__custom input:focus + label,
.form-input__custom input:not(:placeholder-shown) + label{
  font-size: 13px;
  color: #6750A4;
}
</style>
