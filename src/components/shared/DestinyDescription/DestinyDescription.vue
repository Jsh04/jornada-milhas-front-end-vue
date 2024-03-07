<template>
    <section class="destiny-description">
        <article class="destiny-description__title">
            <h2 class="ff-roboto">Descubra o {{Destiny?.name}}</h2>
        </article>
        <article class="destiny-description__subtitle ff-roboto">
            <h3>{{ Destiny?.subtitle }}</h3>
        </article>
        <article class="destiny-description__details">
            <div class="destiny-description__img-container">
                <div class="destiny-description__img">
                    <img src="../../../assets/Imagens/Atacama-destino1.jpg" alt="">
                </div>
                <div class="destiny-description__img">
                    <img src="../../../assets/Imagens/Atacama-destino2.png" alt="" srcset="">
                </div>
            </div>
            <div class="destiny-description__texts">
                <p class="ff-roboto">{{ Destiny?.descriptionEnglish }}</p>
                <p class="ff-roboto ">{{ Destiny?.descriptionPortuguese }}</p>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import Destination from '@/models/Destination';
import { useStore } from '@/store';
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: "DestinyDescription",
    data() {
        return {
            Destiny: {} as Destination | undefined
        }
    },
    methods: {
        DefineDestinyCurrent(): void{
            const id = this.$route.params.id;
            const destiny = this.ListDestinys.find(destiny => destiny.id == id);
            this.Destiny = destiny;
        }
    },
    mounted() {
        this.DefineDestinyCurrent();
    },
    setup(){
        const store = useStore();
        return {
            ListDestinys: computed(() => store.state.destinyModule.Destinys) 
        }
    }
})
</script>

<style scoped>
.destiny-description{
    padding: 3rem 15rem;
}

.destiny-description__title h2{
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: 52px;
    color: black;
}

.destiny-description__subtitle{
    margin-top: 5rem;
}
.destiny-description__subtitle h3{
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    color: black;
}

.destiny-description__details{
    margin-top: 3rem;
    margin-bottom: 5rem;
}

.destiny-description__img-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.destiny-description__img img{
    width: 600px;
    height: 450px;
}

.destiny-description__texts{
    margin-top: 1rem;

}
.destiny-description__texts p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #49454F;
}

.destiny-description__texts p:last-child{
    margin-top: 1.5rem;
}
</style>