<template>
    <div>
        <input type="checkbox" class="custom-checkbox" :id="idCheckbox">
        <label :for="idCheckbox" class="custom-label ff-roboto">{{ titleLabel }}</label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CheckboxFileterComponent",
    props: {
        idCheckbox: {
            type: String,
            required: true
        },
        titleLabel: {
            type: String,
            required: true
        }
    },
    
    data() {
        return {
            
        }
    },
});
</script>

<style scoped>
/* Ocultar o checkbox original */
.custom-checkbox {
    display: none;
}

/* Estilizando o rótulo do checkbox */
.custom-label {
    display: inline-block;
    position: relative;
    padding-left: 35px; /* Ajuste o espaço à esquerda conforme necessário */
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}

/* Estilizando a aparência do checkbox personalizado */
.custom-label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border: 1px solid #49454F;
    border-radius: 5px;
    background-color: transparent; /* Cor de fundo do checkbox */
}

/* Mudando a aparência do checkbox quando estiver marcado */
.custom-checkbox:checked + .custom-label:before {
    background-color: var(--purple-primary); /* Cor de fundo quando marcado */
    border-color: white; /* Cor da borda quando marcado */
}

/* Estilizando a marca de seleção do checkbox */
.custom-checkbox:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    width: 10px;
    height: 10px;
    display: none;
    background: white; /* Cor da marca de seleção */
}
.custom-label:after {
    content: "";
    position: absolute;
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white; /* Cor da seta */
    border-width: 0 2px 2px 0; /* Tamanho e direção da seta */
    transform: rotate(45deg); /* Rotaciona a seta para formar uma seta para cima */
    display: none;
}

/* Exibindo a marca de seleção quando o checkbox estiver marcado */
.custom-checkbox:checked + .custom-label:after {
    display: block;
}
</style>