<template>
    <Banner :url-image="UrlImage" style="height: 100px;"/>
    <section class="register">
        <article class="register__container">
            <div class="register__title">
                <h2 class="ff-roboto">Crie sua conta</h2>
            </div>
            <div class="register__form-container">
                <form action="" class="register__form">
                    <div class="register__form-input">
                        <input type="text" placeholder=" ">
                        <label>Telefone</label>
                    </div>
                    <div class="register__form-input">
                        <input type="text" placeholder=" ">
                        <label>Telefone</label>
                    </div>
                    <div class="register__form-input">
                        <input type="text" placeholder=" ">
                        <label>Telefone</label>
                    </div>
                    <div class="register__form-input">
                        <input type="text" placeholder=" ">
                        <label>Telefone</label>
                    </div>
                </form>
            </div>
        </article>
        

    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '../../Banner/Banner.vue';

export default defineComponent({
    name: "RegisterComponent",
    components: { Banner },
    data() {
        return {
            UrlImage: require("@/assets/Imagens/4-Banner-cadastro.png")
        }
    },
});
</script>

<style scoped>
.register{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
}

.register__container{
    width: 50%;
    padding: 3rem;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 1px 2px 0px black;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
}
.register__title h2{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
    color: black;
    text-align: center;
}

.register__form{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
}
</style>

<style src="./styles/RegisterInput.css"></style>