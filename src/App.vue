<template>
  <Header />
  <Banner />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';
import Banner from './components/Banner/Banner.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Banner
  }
});
</script>

<style>

:root{
  --black-primary: #1D1B20;
  --purple-primary: #6750A4;
}

.ff-roboto{
  font-family: 'Roboto', sans-serif;
}
</style>
