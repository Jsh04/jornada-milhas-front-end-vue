<template>
  <Header></Header>
      <main>
          <router-view></router-view>
      </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/shared/Header/Header.vue';
import Footer from './components/shared/footer/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
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
