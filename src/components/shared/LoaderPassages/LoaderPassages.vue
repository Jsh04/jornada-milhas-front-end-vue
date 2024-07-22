<template>
    <section class="loader-gif">
        <article class="loader-gif__container">
            <div class="loader-gif__container-text">
                <p class="ff-roboto">Aguarde uns instantes, estamos viajando o mundo das milhas para encontrar a melhor solução pra você!</p>
            </div>
            <div>
                <img src="../../../assets/Imagens/Gif-aviao.gif" width="300" alt="Um gif de um avião voando">
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LoaderGifComponent",
    setup () {
        return {}
    }
})
</script>

<style scoped>
.loader-gif{
    display: flex;
    justify-content: center;
    align-self: center;
    margin: 3rem 0;
}

.loader-gif__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    width: 600px;
    border-radius: 10px;
    padding: 1rem 2rem;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
}

.loader-gif__container-text p{ 
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    color: black;
}
</style>