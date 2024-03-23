<template>
  <Header></Header>
      <main>
          <router-view></router-view>
      </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/shared/Header/Header.vue';
import Footer from './components/shared/footer/Footer.vue';
import UserService from '@/services/UserService/UserService';
import CepService from '@/services/CepService/CepService';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  provide(){
    return {
      userService: new UserService(),
      cepService: new CepService()
    }
  }
  
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

.f-style-icon{
  font-size: 20px;
}

.modal-active{
  transform: translateY(0px);
  transition: all 0.5s;
}

.modal-desactive{
  transform: translateY(-700px);
  transition: all 0.5s;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px); /* Aplica o efeito de desfoque */
  background-color: rgba(255, 255, 255, 0.5); /* Cor do fundo com transparência */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
    width: 24px;
    height: 24px;
    border: 2px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
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
