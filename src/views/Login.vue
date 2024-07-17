<template>
    <Banner style="height: 100px;" :urlImage="urlImage"/>
    <section class="login">
        <article class="login__container">
            <div class="login__container-content">
                <div class="login__container-img">
                    <img src="../assets/Imagens/Simbolo-laranja.png" alt="" srcset="">
                </div>
                <div class="login__container-forms">
                    <div class="login__container-title">
                        <h2 class="ff-roboto">Login</h2>
                    </div>
                    
                    <form action="" class="login__forms" @submit.prevent="SendLoginUser()">
                        <div class="login__form-input">
                            <input style="width: calc((530px / 2) - 3rem)" type="text" class="ff-roboto" id="email" v-model="Login.email" placeholder="Digite seu e-mail ou CPF" @blur="v$.Login.Email.$touch"/>
                            <label class="ff-roboto">E-mail</label>
                            <span v-if="ReturnExistErrorInEmail"  style="margin: 0;" class="message_error ff-roboto">
                                {{ v$.Login.Email.$errors[0].$message }}
                            </span>
                        </div>
                        <div class="login__form-input">
                            <input style="width: calc((530px / 2) - 3rem)" type="password" class="ff-roboto" id="password" v-model="Login.password" placeholder="Digite sua senha"  @blur="v$.Login.Password.$touch"/>
                            <label class="ff-roboto">Senha</label>
                            <span v-if="v$.Login.Password.$errors.length != 0" style="margin: 0;" class="message_error  ff-roboto">
                                {{ v$.Login.Password.$errors[0].$message }}
                            </span>
                        </div>
                        <div class="login__form-btn">
                            <button type="submit" class="ff-roboto">ACESSAR MINHA CONTA<span v-if="loading" class="loader"></span></button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="login__container-register">
                <p class="ff-roboto">Ainda não possui sua conta? <router-link to="/cadastro" style="color: black;font-weight: bold;">Clique aqui para se cadastrar!</router-link></p>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '@/components/shared/Banner/Banner.vue';
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import LoginInputModel from '@/application/InputModels/LoginInputModel';
export default defineComponent({
    name: "LoginComponent",
    components: { Banner },
    data() {
        return {
            urlImage: require('@/assets/Imagens/3-Banner-Login.png'),
            Login: {} as LoginInputModel,
            loading: false
        }
    },
    computed: {
        ReturnExistErrorInEmail(){
            return this.v$.Login.Email.$errors.length != 0
        }
    },
    methods: {
        async SendLoginUser(){
            this.loading = true
            const formValidity = await this.v$.$validate()
            if (!formValidity){ 
                swal({
                    text: "Formulário inválido",
                    buttons: [true, "Sair"],
                    icon: "error"
                })
                this.loading = true
                return;
            }
            try {
                const response = await this.store.dispatch(POST_LOGIN, this.Login);
                if (response.status == 200) {
                    swal({
                        icon: "success",
                        text:"Login feito com sucesso",
                        buttons: [true, "Ok!"]
                    })
                    this.$router.push("/");
                }
            } catch (error) {                
                swal({
                    text:"Erro no login",
                    icon: "error",
                    buttons: [true, "Ok"]
                })
            } finally {
                this.loading = false
            }
        },
    },
    validations(){
        return {
            Login: {
                Email: {
                    required: helpers.withMessage("Campo não pode ser nulo", required)
                },
                Password: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required),
                }
            }
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
            v$: useVuelidate()
        }
    }

});

</script>

<style>
.login{
    padding: 5rem 0;
    display: flex;
    justify-content: center;
}
.login__container{
    width: 500px;
    padding: 4rem;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 1px 2px 0px black;
    
}

.login__container-content{
    display: flex;
    row-gap: 3rem;
    justify-content: space-between;
    align-items: center;
}

.login__container-forms{
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}


.login__container-title h2{
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; 
}

.login__forms{
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
}

.login__form-input{
    position: relative;  
    display: flex; 
    flex-direction: column;
}
  
.login__form-input input, .register__form-input select{
  border: none;
  border: 2px solid #6750A4;
  border-radius: 5px;
  -webkit-appearance: none;
  outline: none;
  padding: 15px 20px;
  width: inherit;
  font-size: 12px;
  margin-bottom: 0.5rem;
}

.login__form-input input:focus, .register__form-input select:focus{
  border: 2px solid #6750A4;
}

.login__form-input input::placeholder, .register__form-input option:first-child{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.035px;
  color: #CAC4D0;
}

.login__form-input label{
  pointer-events: none;
  position: absolute;
  top: -0.5rem;
  left: 15px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; 
  background-color: white;
  padding: 0 .5rem;
  box-sizing: border-box;
}


.login__form-input input:focus + label,
.login__form-input input:not(:placeholder-shown) + label{
  font-size: 13px;
  color: #6750A4;
}

.login__form-btn button{
    background-color: var(--purple-primary);
    border-radius: 5px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: white;
    width: calc(530px / 2 - 4px);
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    cursor: pointer;
}

.login__container-register{
    margin-top: 2rem;

}

.login__container-register p{
    text-align: center;
}
</style>