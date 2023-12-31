<template>

    <header class="header">
        <div class="header__logo">
            <img class="header__logo-img" src="../../../assets/Logo/Logo-branco.png" alt="Logo da Jornada Milhas">
        </div>
        <div class="header__btns">
            <button class="header__btns-register ff-roboto">Cadastre-se</button>
            <button class="header__btns-login ff-roboto">Login</button>
        </div>
    </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderComponent',

})


</script>

<style scoped>
.header{
    background-color: var(--black-primary);
    display: flex;
    padding: 1rem 15%;
    justify-content: space-between;
    align-items: center;
}
.header__logo-img{
    width: 200px;
    height: 50px;
}
.header__btns{
    display: flex;
    column-gap: 1rem;
}

.header__btns-register{
    border-radius: 5px;
    background-color: var(--purple-primary);
    color: white;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
}
.header__btns-login{
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--purple-primary);
    border-radius: 5px;
    border: 1px solid rgba(121, 116, 126, 1);
}
</style>