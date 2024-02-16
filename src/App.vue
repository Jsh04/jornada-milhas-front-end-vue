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

*{
  box-sizing: revert;
}

:root{
  --black-primary: #1D1B20;
  --purple-primary: #6750A4;
  --gray-primary: #F5F5F5;
  --gray-secondary: #e8e8e8;
}

.ff-roboto{
  font-family: 'Roboto', sans-serif;
}

.container__jornada{
  padding: 0rem 10rem;
}

.message_error{
  color: red;
  margin-top: 1rem;
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

</style>
