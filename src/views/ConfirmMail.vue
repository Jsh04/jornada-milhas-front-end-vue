<template>
    <section class="confirmMail">
        <article class="confirmMail__container">
            <div class="confirmMail__title">
                <h2>Confirme Seu E-mail</h2>
            </div>
            <div class="confirmMail__subtitle">
                <p class="ff-roboto">Obrigado por se cadastrar. Para começar a explorar as vantagens da Jornada Milhas, por favor, confirme seu endereço de e-mail, porém se já confirmou, é só clicar nesse botão abaixo:</p>
            </div>
            <div class="confirmMail__btn">
                <button @click="SendBtn()" class="ff-roboto">Já confirmei E-mail</button>
            </div>
        </article>
    </section>
    
</template>

<script lang="ts">
import { useStore } from '@/store';
import { CONFIRM_MAIL } from '@/store/actions/LoginActions';
import swal from 'sweetalert';
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    name: "ConfirmMailComponent",
    setup (props, context,) {

        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const idUser = ref(0);

        async function SendBtn(): Promise<void>{
            try {
                const response = await store.dispatch(CONFIRM_MAIL);
                changeRouterConfirmMail(response.data)
            } catch (error) {
                swal({
                    icon: 'error',
                    title: "Erro ao verificar a confirmação de E-mail"
                })
            }
            
        }

        function changeRouterConfirmMail(isConfirmMail: boolean) {
            if (isConfirmMail) 
                router.push('/')
            else
                swal({
                    icon: 'error',
                    title: "Você ainda não confirmou o E-mail"
                })
            
        }

        return {
            store, 
            SendBtn,
            idUser
        }
    },
    mounted() {
        const idUser = this.$route.params.idUser
        console.log(idUser);
        
        
    },
})
</script>

<style scoped>
.confirmMail{
    display: flex;
    justify-content: center;
    margin: 10rem 0;
}

.confirmMail__container{
    border-radius: 16px;
    background: #F5F5F5;
    width: 50%;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}

.confirmMail__title h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
}

.confirmMail__subtitle p{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; 
}

.confirmMail__btn button{
    padding:1rem;
    text-align:center;
    color:#fff;
    font-weight:700;
    border-radius:5px;
    background-color:var(--purple-primary);
}

.confirmMail__btn{
    align-self: center;
}
</style>