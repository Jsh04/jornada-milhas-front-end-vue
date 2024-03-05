<template>

    <header class="header">
        <div class="header__logo">
            <router-link to="/"><img class="header__logo-img" src="../../../assets/Logo/Logo-branco.png" alt="Logo da Jornada Milhas"></router-link>
        </div>
        <div class="header__btns">
            <router-link class="header__btns-links" to="/about">Sobre</router-link> 
            <router-link to="/cadastro" class="header__btns-register ff-roboto">Cadastre-se</router-link>
            <router-link class="ff-roboto header__btns-login" to="/login">Login</router-link>
            <router-link v-if="store.getters.isLoginAdm" class="ff-roboto header__btns-adm" to="/admin/destino">Administrador</router-link>
        </div>
    </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
    name: 'HeaderComponent',
    setup(){
        const store = useStore();
        return {store}
    }
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
    column-gap: 2.5rem;
    align-items: center;
}

.header__btns-register{
    border-radius: 5px;
    background-color: var(--purple-primary);
    color: white;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
}
.header__btns-login{
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--purple-primary);
    border-radius: 5px;
    border: 1px solid rgba(121, 116, 126, 1);
    text-decoration: none;
}
.header__btns-adm{
    cursor: pointer;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--purple-primary);
    border-radius: 5px;
    border: 1px solid rgba(121, 116, 126, 1);
    text-decoration: none;
    background-color: white;
}

.header__btns-links{
    text-decoration: none;
    color: white;
}
    


</style>