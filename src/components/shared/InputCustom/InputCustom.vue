<template>
    <div class="form-input__custom" v-if="isAdminRegister">
        <input
            :type="typeInput"
            class="ff-roboto input__style"
            :placeholder="placeHolderInput"
            :id="idInput"
            :value="modelValue"
            @blur="$emit('blur')"
            @click="$emit('click')"
            @change="$emit('change')"
            :disabled="isAdminRegister"
        />
        <label class="ff-roboto">Endereço</label>
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
        placeHolderInput: {
            type: String, 
            required: false
        },
        idInput: {
            type: String, 
            required: false,
        },
        modelValue:{
            type: [String, Array, Boolean, Number],
            required: true 
        }
    },
    emits: ['click', 'change', 'update:modelValue']
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
  width: inherit;
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
