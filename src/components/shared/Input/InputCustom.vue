

<template>
    
    <input class="input ff-roboto" type="password"
                :value="modelValue"
                :placeholder="placeholderInput"
                @input="emitNewValueInput"
              />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputCustom",
  props: {
    placeholderInput:{
      type: String,
      required: false,
    },
    modelValue: {
      type: String,
      required: true
    }
  },
  methods:{
    emitNewValueInput(event: Event){
      const newValueInput = (event.target as HTMLInputElement).value;
      this.$emit('update:modelValue', newValueInput)
    }
  }
}) 

</script>

<style lang="css" scoped>
.input{
  width: calc((530px / 2) - 3rem)
}
</style>