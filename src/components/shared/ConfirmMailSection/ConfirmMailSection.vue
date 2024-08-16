<template>
    <section class="confirmMail">
        <article class="confirmMail__container">
            <div class="confirmMail__title">
                <h2>{{ textTitle }}</h2>
            </div>
            <template v-if="isConfirmMail" >
                <div class="confirmMail__subtitle">
                    <p class="ff-roboto">{{ subTitle }}</p>
                </div>
                <div class="confirmMail__btn">
                    <button @click="SendBtn()" class="ff-roboto">Já confirmei E-mail</button>
                </div>
            </template>
            <template v-else>
                <div class="confirmMail__subtitle">
                    <p class="ff-roboto">{{ subTitle }}</p>
                </div>
                <div class="confirmMail__btn">
                    <router-link class="ff-roboto" to="/">Voltar para home</router-link>
                </div>
            </template>
            
        </article>
    </section>
</template>

<script lang="ts">
import Util from '@/util/Util';
import { useStore } from '../../../store';
import { CONFIRM_MAIL } from '../../../store/actions/LoginActions';
import { SEND_REQUEST_CONFIRM_MAIL } from '../../../store/actions/UserActions';
import { defineComponent, inject, ref } from 'vue'
import { useRouter } from 'vue-router';
import IAlertModal from '@/application/interfaces/IAlertModal';
import AlertModalSweet from '@/infraestruture/alerts/AlertModal';


export default defineComponent({
    name: "ConfirmMailComponent",
    props: {
        isConfirmMail: {
            required: true,
            type: Boolean
        },
        textTitle: {
            type: String,
            required: true
        },
        subTitle: {
            required: true,
            type: String
        }
    },
    setup (props, context) {
        const store = useStore();
        const router = useRouter();
        const alertModal = inject<IAlertModal>("AlertModal");
        const idUser = ref(0);

        async function SendBtn(): Promise<void>{
            try {
                const response = await store.dispatch(CONFIRM_MAIL, idUser.value);
                changeRouterConfirmMail(response.data)
            } catch (error) {
                alertModal?.addAlertModalError("Erro ao verificar a confirmação de E-mail", "Tente novamente mais tarde");
            }
            
        }

        async function RequestConfirmMail(idUser: number){
            try {
                const response = await store.dispatch(SEND_REQUEST_CONFIRM_MAIL, idUser);
                if (response.status == 204) alertModal?.addAlertModalSuccess("E-mail confirmado com sucesso","Basta apenas clicar no botão abaixo para prosseguir");
                
            } catch (error) {
                alertModal?.addAlertModalError("Erro ao confirmar E-mail, tente novamente","");
            }
        }

        function changeRouterConfirmMail(isConfirmMail: boolean) {
            if (isConfirmMail) 
                router.push('/')
            else
                alertModal?.addAlertModalError("Você ainda não confirmou o E-mail", "")
        }

        return {
            store, 
            SendBtn,
            idUser,
            RequestConfirmMail
        }
    },
    async mounted() {
        this.idUser = Number(this.$route.params.idUser);
        if(!this.isConfirmMail) await this.RequestConfirmMail(this.idUser)
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