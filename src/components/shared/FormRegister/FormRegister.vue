<template>
    <section class="register">
        <article class="register__container">
            <div class="register__title">
                <h2 class="ff-roboto">{{ title }}</h2>
            </div>
            <div class="register__form-container">
                <form @submit.prevent="SendForms()" action="" class="register__form">
                    <InputCustom v-model="User.name" 
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
                        
                        <div
                            class="register__form-input"
                            v-if="isAdminRegister"
                        >
                            <input
                                style="width: calc((530px / 2) - 3rem)"
                                type="text"
                                class="ff-roboto"
                                placeholder="Digite seu CEP"
                                id="cep"
                                v-model="User.cep"
                                minlength="8"
                                maxlength="9"
                                @blur="[v$.User.cep.$touch, GetInfoAdress()]"
                            />
                            <label class="ff-roboto">CEP</label>
                            <span
                                class="message_error ff-roboto"
                                v-for="(error, index) in v$.User.cep.$errors"
                                :key="index"
                            >
                                {{ error.$message }}
                            </span>
                        </div>
                        <div class="register__form-input">
                            <input
                                style="width: calc((530px / 2) - 3rem)"
                                type="text"
                                class="ff-roboto"
                                placeholder="Digite seu cidade"
                                id="city"
                                v-model="User.city"
                                @blur="v$.User.city.$touch"
                            />
                            <label class="ff-roboto">Cidade</label>
                            <span
                                class="message_error ff-roboto"
                                v-for="(error, index) in v$.User.city.$errors"
                                :key="index"
                            >
                                {{ error.$message }}
                            </span>
                        </div>
                        <div class="register__form-input">
                            <select
                                v-model="User.state"
                                id="state"
                                style="width: calc((530px / 2) - 6px)"
                                class="ff-roboto"
                                @blur="v$.User.state.$touch"
                                :disabled="isAdminRegister"
                            >
                                <option value="0">Selecione o estado</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                            </select>
                            <label class="ff-roboto">Estado</label>
                            <span
                                class="message_error ff-roboto"
                                v-for="(error, index) in v$.User.state.$errors"
                                :key="index"
                            >
                                {{ error.$message }}
                            </span>
                        </div>
                        <div
                            class="register__form-input"
                            v-if="isAdminRegister"
                        >
                            <input
                                style="width: calc((530px / 2) - 3rem)"
                                type="text"
                                class="ff-roboto"
                                placeholder="Seu endereço"
                                id="address"
                                v-model="User.address"
                                @blur="v$.User.adress.$touch"
                                :disabled="isAdminRegister"
                            />
                            <label class="ff-roboto">Endereço</label>
                            <span
                                class="message_error ff-roboto"
                                v-for="(error, index) in v$.User.adress.$errors"
                                :key="index"
                            >
                                {{ error.$message }}
                            </span>
                        </div>
                        <div
                            class="register__form-input"
                            v-if="isAdminRegister"
                        >
                            <input
                                style="width: calc((530px / 2) - 3rem)"
                                type="text"
                                class="ff-roboto"
                                placeholder="Seu bairro"
                                id="district"
                                v-model="User.district"
                                :disabled="isAdminRegister"
                                @blur="[v$.User.district.$touch]"
                            />
                            <label class="ff-roboto">Bairro</label>
                            <span
                                class="message_error ff-roboto"
                                v-for="(error, index) in v$.User.district
                                    .$errors"
                                :key="index"
                            >
                                {{ error.$message }}
                            </span>
                        </div>
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
import InputCustom from "../InputCustom/InputCustom.vue";
export default defineComponent({
    name: "RegisterComponent",
    computed:{
        GetListErrorsCodeEmployee(){
            return this.v$.User.codeEmployee.$errors
        }
    },
    components: {InputCustom},
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
