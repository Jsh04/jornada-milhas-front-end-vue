<template>
    <section class="about">
        <article class="slogan__container">
            <div class="slogan__container-title">
                <h2 class="ff-roboto">Alcance os Céus: Voos Que Transformam Sonhos em Realidade</h2>
            </div>
            <div class="slogan__container-subtitle"> 
                <h3 class="ff-roboto">Descubra o Mundo com Jornada Milhas - Sua Passagem Para Novas Aventuras</h3>
            </div>
        </article>
        <article class="description__container">
            <div class="description__container-imgs">
                <img src="../../assets/Imagens/Card-Turquia.png" alt="">
                <img src="../../assets/Imagens/Card-Atacama.png" alt="">
            </div>
            <div class="description__container-paragrafs">
                <p class="ff-roboto">Embarque em uma jornada extraordinária com Jornada Milhas, onde cada quilômetro percorrido é uma promessa de novas descobertas e experiências inesquecíveis. Com asas que transcendem fronteiras e horizontes, nós da Jornada Milhas estamos aqui para transformar seus sonhos de viagem em realidade. De praias paradisíacas a metrópoles pulsantes, seja qual for o seu destino, deixe-nos guiá-lo pelo céu, onde cada voo é mais do que uma simples viagem, é uma oportunidade de criar memórias que durarão para sempre. Permita-se voar mais alto com Jornada Milhas e abrace o mundo com os braços abertos.</p>
                <p class="ff-roboto">Na Jornada Milhas, buscamos constantemente oferecer os melhores benefícios aos nossos clientes, garantindo tarifas mais acessíveis em destinos selecionados e uma experiência exclusiva em cada viagem. Com nossas parcerias estratégicas e programas de fidelidade, podemos proporcionar preços mais competitivos em uma variedade de destinos populares, permitindo que você explore o mundo sem comprometer seu orçamento. Além disso, nossa abordagem personalizada garante que cada detalhe da sua jornada seja cuidadosamente planejado, desde a seleção dos destinos até as acomodações e atividades exclusivas disponíveis apenas para os viajantes da Jornada Milhas. Com nós, você não apenas economiza em suas viagens, mas também desfruta de um tratamento especial e acesso a experiências únicas que tornam cada aventura verdadeiramente memorável.</p>
            </div>
            
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "AboutComponent",
})
</script>

<style scoped>
.about{
    padding: 3rem 0;
    width: 50%;
    margin: auto;
}

.slogan__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;

}

.slogan__container-title h2{
    font-size: 40px;
    text-align: center;
}

.slogan__container-subtitle h3{
    font-size: 24px;
    text-align: center;
}

.description__container{
    margin-top: 3rem;

}

.description__container-imgs img{
    border-radius: 10px;
}

.description__container-imgs{
    display: flex;
    justify-content: space-between;
}

.description__container-paragrafs{
    margin-top: 3rem;
}

.description__container-paragrafs p{
    line-height: 2rem;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    letter-spacing: 1px;
    
}
</style>