<template>
  <Header></Header>
  <Banner />
  <div class="container">
    <Filter />
    <Destinations />
    <Depoiments />
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';
import Banner from './components/Banner/Banner.vue';
import Filter from './components/Filter/Filter.vue';
import Destinations from './components/Destinations/Destinations.vue';
import Depoiments from './components/Depoiments/Depoiments.vue';



export default defineComponent({
  name: 'App',
  components: {
    Header,
    Banner,
    Filter,
    Destinations,
    Depoiments
  }
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
