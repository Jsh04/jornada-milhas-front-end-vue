<template>
    <section class="register">
        <article class="register__container">
            <div class="register__title">
                <h2 class="ff-roboto">{{ title }}</h2>
            </div>
            <div class="register__form-container">
                <form @submit.prevent="SendForms()" action="" class="register__form">
                    <InputCustom 
                        v-model.trim="User.name" 
                        label-title="Nome" 
                        id-input="name"  
                        placeHolderInput="Digite seu nome" 
                        type-input="text" 
                        :errors-validations="v$.User.name.$errors"/>

                    <InputCustom v-if="isAdminRegister"
                    label-title="Código Empregado" 
                    id-input="codeEmployee"
                    v-model.trim="User.codeEmployee"
                    placeHolderInput="Digite o seu código de funcionário"
                    type-input="text" 
                    :errors-validations="GetListErrorsCodeEmployee"/>

                    <div class="register__container-fields">
                        <InputCustom 
                        label-title="Data de nascimento" 
                        id-input="dtBirth"
                        v-model="User.dtBirth"
                        placeHolderInput=""
                        @blur="v$.User.dtBirth.$touch"
                        type-input="date" 
                        :errors-validations="v$.User.dtBirth.$errors"
                        />
                        
                        <div class="register__form-genre">
                            <label class="ff-roboto register__form-genre-label"
                                >Gênero</label
                            >
                            <div class="register__form-radios">
                                <div class="register__form-radios-container">
                                    <label for="female" class="ff-roboto"
                                        >Feminino</label
                                    >
                                    <input
                                        type="radio"
                                        v-model="User.genre"
                                        value="Female"
                                        name="genre"
                                        id="female"
                                    />
                                </div>
                                <div class="register__form-radios-container">
                                    <label for="male" class="ff-roboto"
                                        >Masculino</label
                                    >
                                    <input
                                        type="radio"
                                        v-model="User.genre"
                                        value="Male"
                                        name="genre"
                                        id="male"
                                    />
                                </div>
                                <div class="register__form-radios-container">
                                    <label for="notInfo" class="ff-roboto"
                                        >Prefiro não informar</label
                                    >
                                    <input
                                        type="radio"
                                        v-model="User.genre"
                                        value="NotInfo"
                                        name="genre"
                                        id="notInfo"
                                    />
                                </div>
                            </div>
                        </div>
                        <InputCustom
                            label-title="CPF" 
                            id-input="cpf"
                            v-model.trim="User.cpf"
                            placeHolderInput="XXX.XXX.XXX-XX"
                            type-input="text" 
                            :errors-validations="v$.User.cpf.$errors"
                            @blur="v$.User.cpf.$touch"
                            v-maska="'###.###.###-##'">
                        </InputCustom>
                        <InputCustom
                            label-title="Telefone" 
                            id-input="phone"
                            v-model.trim="User.phone"
                            placeHolderInput="Digite seu telefone"
                            type-input="text" 
                            :errors-validations="v$.User.phone.$errors"
                            @blur="v$.User.phone.$touch"
                            v-maska="'(##) #####-####'">
                        </InputCustom>
                        <InputCustom v-if="isAdminRegister"
                            label-title="CEP" 
                            id-input="email"
                            v-model.trim="User.cep"
                            placeHolderInput="Digite seu CEP"
                            type-input="text" 
                            :min-length-input="8"
                            :max-length-input="9"
                            :errors-validations="v$.User.cep.$errors"
                            @blur="[v$.User.cep.$touch, GetInfoAdress()]">
                        </InputCustom>
                        <InputCustom v-if="isAdminRegister"
                            label-title="Cidade" 
                            id-input="city"
                            v-model.trim="User.city"
                            placeHolderInput="Digite sua cidade"
                            type-input="text" 
                            :errors-validations="v$.User.city.$errors"
                            @blur="v$.User.city.$touch">
                        </InputCustom>
                        <SelectCustom
                            label-title="Estado" 
                            id-select="state"
                            v-model.trim="User.state"
                            classes-person="w-100"
                            placeHolderInput="Selecione seu estado"
                            type-input="text"
                            :errors-validations="v$.User.state.$errors"
                            :list-selected-generic="optionsDataStatesOfBrazil"
                            @blur="v$.User.state.$touch" />
                        
                        <InputCustom v-if="isAdminRegister"
                            label-title="Endereço" 
                            id-input="address"
                            v-model.trim="User.address"
                            placeHolderInput="Digite seu endereço"
                            type-input="text" 
                            :errors-validations="v$.User.address.$errors"
                            @blur="v$.User.address.$touch">
                        </InputCustom>
                        <InputCustom v-if="isAdminRegister"
                            label-title="Bairro" 
                            id-input="district"
                            v-model.trim="User.district"
                            placeHolderInput="Digite seu bairro"
                            type-input="text" 
                            :errors-validations="v$.User.district.$errors"
                            @blur="v$.User.district.$touch">
                        </InputCustom>
                        <InputCustom
                            label-title="E-mail" 
                            id-input="email"
                            v-model.trim="User.email"
                            placeHolderInput="Digite seu e-mail"
                            type-input="email" 
                            :errors-validations="v$.User.email.$errors"
                            @blur="v$.User.email.$touch">
                        </InputCustom>
                        <InputCustom
                            label-title="Confirmar e-mail" 
                            id-input="confirmEmail"
                            v-model.trim="User.confirmEmail"
                            placeHolderInput="XXX.XXX.XXX-XX"
                            type-input="email" 
                            :errors-validations="v$.User.confirmEmail.$errors"
                            @blur="v$.User.confirmEmail.$touch">
                        </InputCustom>
                        <InputCustom
                            label-title="Senha" 
                            id-input="confirmPassword"
                            v-model.trim="User.password"
                            placeHolderInput="Digite sua senha"
                            type-input="password" 
                            :errors-validations="v$.User.password.$errors"
                            @blur="v$.User.password.$touch">
                        </InputCustom>
                        <InputCustom
                            label-title="Digite novamente Senha" 
                            id-input="confirmPassword"
                            v-model.trim="User.confirmPassword"
                            placeHolderInput="Repita sua senha"
                            type-input="password" 
                            :errors-validations="v$.User.confirmPassword.$errors"
                            @blur="v$.User.confirmPassword.$touch">
                        </InputCustom>
                        
                    </div>
                    <div class="register__form-checkbox">
                        <input
                            id="terms"
                            v-model="checkedTerms"
                            type="checkbox"
                        />
                        <label for="terms" class="ff-roboto"
                            >Li e aceito os termos e condições deste
                            cadastro.</label
                        >
                    </div>
                    <div class="register__form-btn-container">
                        <button class="register__form-btn ff-roboto" type="submit">
                            criar minha conta
                        </button>
                    </div>
                </form>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { useVuelidate } from "@vuelidate/core";
import IUserInputModel from "@/application/InputModels/IUserInputModel";
import IAlertModal from "@/application/interfaces/alert/IAlertModal";
import { ALERT_MODAL } from "@/common/constants/InjectionKeySerivices";
import { vMaska } from "maska/vue";
import FormRegisterValidations from "./validations/FormRegisterValidations";
import InputCustom from "../InputsCustom/InputCustom.vue";
import ISelectOption from "@/components/interfaces/ISelectOption";
import SelectCustom from "../InputsCustom/SelectCustom.vue";

export default defineComponent({
    name: "RegisterComponent",
    computed:{
        GetListErrorsCodeEmployee(){
            return this.v$.User.codeEmployee.$errors
        }
    },
    components: {InputCustom, SelectCustom},
    props: {
        isAdminRegister: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
    directives: { maska: vMaska },
    data() {
        return {
            UrlImage: require("@/assets/Imagens/4-Banner-cadastro.png"),
            User: {} as IUserInputModel,
            checkedTerms: false,
            optionsDataStatesOfBrazil: [
            { value: 'AC', name: 'Acre' },
            { value: 'AL', name: 'Alagoas' },
            { value: 'AP', name: 'Amapá' },
            { value: 'AM', name: 'Amazonas' },
            { value: 'BA', name: 'Bahia' },
            { value: 'CE', name: 'Ceará' },
            { value: 'DF', name: 'Distrito Federal' },
            { value: 'ES', name: 'Espírito Santo' },
            { value: 'GO', name: 'Goiás' },
            { value: 'MA', name: 'Maranhão' },
            { value: 'MT', name: 'Mato Grosso' },
            { value: 'MS', name: 'Mato Grosso do Sul' },
            { value: 'MG', name: 'Minas Gerais' },
            { value: 'PA', name: 'Pará' },
            { value: 'PB', name: 'Paraíba' },
            { value: 'PR', name: 'Paraná' },
            { value: 'PE', name: 'Pernambuco' },
            { value: 'PI', name: 'Piauí' },
            { value: 'RJ', name: 'Rio de Janeiro' },
            { value: 'RN', name: 'Rio Grande do Norte' },
            { value: 'RS', name: 'Rio Grande do Sul' },
            { value: 'RO', name: 'Rondônia' },
            { value: 'RR', name: 'Roraima' },
            { value: 'SC', name: 'Santa Catarina' },
            { value: 'SP', name: 'São Paulo' },
            { value: 'SE', name: 'Sergipe' },
            { value: 'TO', name: 'Tocantins' }
            ] as ISelectOption[]
        };
    },

    methods: {
        async SendForms() {
            if (!this.checkedTerms) {
                this.alertModal?.addAlertModalWarning("Confirme que leu nossas condições","");
                return;
            }

            const formValidity = await this.v$.$validate();
            if (!formValidity) {
                alert("Formulário inválido");
                return;
            }

            // const data = await this.userService?.RegisterUser(this.User, this.isAdminRegister);
            // if (data != undefined) {
            //   this.$router.push(`/confirmarEmail/${data.id}`);
            //   this.v$.$reset();
            // }
        },
        GetInfoAdress() {
            console.log("test");
        },
    },
    validations() {
        return {
            User: FormRegisterValidations(this.isAdminRegister, this.User)
        }
    },
    setup() {
        const alertModal = inject<IAlertModal>(ALERT_MODAL);
        return {
            v$: useVuelidate(),
            alertModal,
        };
    },
});
</script>

<style src="./styles/Register.css" scoped></style>
<style src="./styles/RegisterInput.css" scoped></style>
