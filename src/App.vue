<template>
  <Header></Header>
  <Banner :url-image="urlImageTop"/>
  <div class="container">
    <Filter />
    <Destinations />
    <Depoiments />
  </div>
  <Banner :url-image="urlImageBotton"/>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';
import Banner from './components/Banner/Banner.vue';
import Filter from './components/Filter/Filter.vue';
import Destinations from './components/Destinations/Destinations.vue';
import Depoiments from './components/Depoiments/Depoiments.vue';
import Footer from './components/footer/Footer.vue';



export default defineComponent({
  name: 'App',
  components: {
    Header,
    Banner,
    Filter,
    Destinations,
    Depoiments,
    Footer
  },
  data() {
    return {
      urlImageBotton: require('@/assets/Imagens/2-Banner-homepage2.png'),
      urlImageTop: require('@/assets/Imagens/Banner-homepage.png'),
    }
  },
});
</script>

<style>

:root{
  --black-primary: #1D1B20;
  --purple-primary: #6750A4;
  --gray-primary: #F5F5F5;
}

.ff-roboto{
  font-family: 'Roboto', sans-serif;
}

.container{
  padding: 0rem 10rem;
}
</style>
