<template>
<router-view>
</router-view>
    <section class="destinyPage">

        <article class="destinyPage__menu">
            <div class="destinyPage__menu-item ff-roboto">
                <router-link to="/admin/destino/cadastro" class="destinyPage__menu-item-content">Cadastrar Destino</router-link>
                <i style="font-size: 32px;" class="las la-plus-circle"></i>
            </div>
            <div class="destinyPage__menu-item ff-roboto">
                <router-link to="/" class="destinyPage__menu-item-content">Relatórios de Destinos</router-link>
                <i style="font-size: 32px;" class="las la-file-alt"></i>
            </div>
            <div class="destinyPage__menu-item ff-roboto">
                <router-link to="/" class="destinyPage__menu-item-content">Listar Destinos</router-link>
                <i style="font-size: 32px;" class="las la-eye"></i>
            </div>
        </article>
    </section>

    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>
.destinyPage{
    display: flex;
    justify-content: center;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 4rem auto;
    width: 50%;
}

.destinyPage__menu{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    width: 100%;
}

.destinyPage__menu-item{
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
}

.destinyPage__menu-item-content{
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 32px;
    height: 100%;
}

</style>