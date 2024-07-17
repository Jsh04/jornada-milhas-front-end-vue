<template>
  <section class="register">
    <article class="register__container">
      <div class="register__title">
        <h2 class="ff-roboto">{{ title }}</h2>
      </div>
      <div class="register__form-container">
        <form @submit.prevent="SendForms()" action="" class="register__form">
          <div class="register__form-input">
            <input
              style="width: calc(530px - 3rem)"
              type="text"
              class="ff-roboto"
              name="name"
              id="name"
              placeholder="Digite seu nome completo"
              :class="[v$.User.name.$errors.length > 0 ? 'register__input_erro' : '']"
              v-model.trim="User.name"
              @blur="v$.User.name.$touch"
            />
            <label class="ff-roboto">Nome</label>
            <span
              class="message_error ff-roboto"
              v-for="(error, index) in v$.User.name.$errors"
              :key="index"
            >
              {{ error.$message }}
            </span>
          </div>
          <div
            style="margin-top: 2rem"
            class="register__form-input"
            v-if="isAdminRegister"
          >
            <input
              style="width: calc(530px - 3rem)"
              type="text"
              class="ff-roboto"
              id="codeEmployee"
              placeholder="Digite seu nome completo"
              :class="[
                v$.User.codeEmployee.$errors.length > 0 ? 'register__input_erro' : '',
              ]"
              v-model.trim="User.codeEmployee"
              minlength="8"
              @blur="v$.User.codeEmployee.$touch"
            />
            <label class="ff-roboto">Código do Funcionário</label>
            <span
              class="message_error ff-roboto"
              v-for="(error, index) in v$.User.codeEmployee.$errors"
              :key="index"
            >
              {{ error.$message }}
            </span>
          </div>
          <div class="register__container-fields">
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="date"
                class="ff-roboto"
                placeholder="XX/XX/XXXX"
                id="dtBirth"
                v-model="User.dtBirth"
                @blur="v$.User.dtBirth.$touch"
              />
              <label class="ff-roboto">Data de nascimento</label>
              <span
                class="message_error ff-roboto"
                v-for="(error, index) in v$.User.dtBirth.$errors"
                :key="index"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-genre">
              <label class="ff-roboto register__form-genre-label">Gênero</label>
              <div class="register__form-radios">
                <div class="register__form-radios-container">
                  <label for="female" class="ff-roboto">Feminino</label>
                  <input
                    type="radio"
                    v-model="User.genre"
                    value="Female"
                    name="genre"
                    id="female"
                  />
                </div>
                <div class="register__form-radios-container">
                  <label for="male" class="ff-roboto">Masculino</label>
                  <input
                    type="radio"
                    v-model="User.genre"
                    value="Male"
                    name="genre"
                    id="male"
                  />
                </div>
                <div class="register__form-radios-container">
                  <label for="notInfo" class="ff-roboto">Prefiro não informar</label>
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
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                id="cpf"
                placeholder="XXX.XXX.XXX-XX"
                v-model="User.cpf"
                @blur="v$.User.cpf.$touch"
              />
              <label class="ff-roboto">CPF</label>
              <span
                v-if="v$.User.cpf.$errors.length != 0"
                class="message_error ff-roboto"
              >
                {{ v$.User.cpf.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Digite seu telefone"
                id="phone"
                v-model="User.phone"
                maxlength="15"
                @blur="v$.User.phone.$touch"
                @keyup="MaskPhone()"
              />
              <label class="ff-roboto">Telefone</label>
              <span
                v-if="v$.User.phone.$errors.length != 0"
                class="message_error ff-roboto"
              >
                {{ v$.User.phone.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input" v-if="isAdminRegister">
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
              <select v-model="User.state" id="state" style="width: calc((530px / 2) - 6px)" class="ff-roboto" @blur="v$.User.state.$touch" :disabled="isAdminRegister">
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
            <div class="register__form-input" v-if="isAdminRegister">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Seu endereço"
                id="address"
                v-model="User.adress"
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
            <div class="register__form-input" v-if="isAdminRegister">
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
                v-for="(error, index) in v$.User.district.$errors"
                :key="index"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="email"
                class="ff-roboto"
                id="email"
                name="email"
                v-model="User.email"
                placeholder="Digite seu e-mail"
                @blur="v$.User.email.$touch"
              />
              <label class="ff-roboto">E-mail</label>
              <span v-if="v$.User.email.$errors.length != 0" class="message_error ff-roboto">
                {{ v$.User.email.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="email"
                class="ff-roboto"
                name="confirmEmail"
                id="confirmEmail"
                placeholder="Digite seu e-mail novamente"
                v-model="User.confirmEmail"
                @blur="v$.User.confirmEmail.$touch"
              />
              <label class="ff-roboto">Confirmar e-mail</label>
              <span
                v-if="v$.User.confirmEmail.$errors.length != 0"
                class="message_error ff-roboto"
              >
                {{ v$.User.confirmEmail.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="password"
                class="ff-roboto"
                v-model="User.password"
                id="password"
                placeholder="Digite sua senha"
                @blur="v$.User.password.$touch"
              />
              <label class="ff-roboto">Senha</label>
              <span
                v-if="v$.User.password.$errors.length != 0"
                class="message_error ff-roboto"
              >
                {{ v$.User.Password.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="password"
                class="ff-roboto"
                v-model="User.confirmPassword"
                id="confirmPassword"
                placeholder="Repita sua senha"
                @blur="v$.User.confirmPassword.$touch"
              />
              <label class="ff-roboto">Confirmar Senha</label>
              <span
                v-if="v$.User.confirmPassword.$errors.length != 0"
                class="message_error ff-roboto"
              >
                {{ v$.User.ConfirmPassword.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div class="register__form-checkbox">
            <input id="terms" v-model="checkedTerms" type="checkbox" />
            <label for="terms" class="ff-roboto"
              >Li e aceito os termos e condições deste cadastro.</label
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
import User from '../../../domain/users/User'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, sameAs, minLength} from '@vuelidate/validators'
import { useStore } from "../../../store"
import {validateCpf} from "../../../common/validations/ValidationCPF"
import { greaterThan18 } from "../../../common/validations/ValidationBirthDate";
import { validatePhone } from "../../../common/validations/ValidationPhone";
import CepResponseDTO from "@/infraestruture/DTOs/CepDto";
import { AxiosResponse } from "axios";
import Util from "@/util/Util";
import UserService from "@/services/UserService/UserService";
import CepService from "@/services/CepService/CepService";

export default defineComponent({
    name: "RegisterComponent",
    props: {
      isAdminRegister: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    data() {
        return {
        UrlImage: require("@/assets/Imagens/4-Banner-cadastro.png"),
        User: {} as User,
        checkedTerms: false
        };
    },
    methods: {
        async SendForms(){
        if (!this.checkedTerms) {
            Util.ShowAlert("Confirme que leu nossas condições", "warning", "", [true, "Sair"] )
            return;
        }
        
        const formValidity = await this.v$.$validate();
        if (!formValidity) {
            alert("Formulário inválido")
            return;
        }

        const data = await this.userService?.RegisterUser(this.User, this.isAdminRegister);
        if (data != undefined) {
          this.$router.push(`/confirmarEmail/${data.id}`);
          this.v$.$reset();
        }

        },
        async GetInfoAdress(){
          const data = await this.cepService?.RequestGetViaCep(this.User.cep);
          
          if (data != undefined) this.FillInputsAdress(data);
          
        },

        FillInputsAdress(data: CepResponseDTO ){
          this.User.adress = data.logradouro
          this.User.district = data.bairro
          this.User.city = data.localidade
          this.User.state = data.uf
        },
        MaskPhone(){
          this.User.phone = Util.MaskPhone(this.User.phone)  
        }
    },
    validations(){
        return {
        User: {
            name: { required: helpers.withMessage("O campo não poderá ser nulo", required) },
            email: {
              email: helpers.withMessage("O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com", email),
              required: helpers.withMessage("O campo deverá ser obrigatório", required) 
              },
            codeEmployee: this.isAdminRegister ? {
              required: helpers.withMessage("O campo deverá ser obrigatório", required),
              minLength: helpers.withMessage(
                "O campo deverá ter no mínimo 8 caracteres",
                minLength(8)
              ),
            }
          : {},

        confirmEmail: {
          email: helpers.withMessage(
            "O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com",
            email
          ),
          required: helpers.withMessage("O campo deverá ser obrigatório", required),
          sameAsEmail: helpers.withMessage(
            "O email deverá ser igual ao email digitado anteriormente",
            sameAs(this.User.email)
          ),
        },
        confirmPassword: {
          required: helpers.withMessage("O campo deverá ser obrigatório", required),
          sameAsPassword: helpers.withMessage(
            "O senha deverá ser a mesma digitada anteriormente",
            sameAs(this.User.password)
          ),
        },
        password: {
          required: helpers.withMessage("O campo não poderá ser nulo", required),
        },
        cpf: {
          required: helpers.withMessage("O campo deverá ser obrigatório", required),
          validatecpf: helpers.withMessage("cpf inválido", validateCpf),
        },
        dtBirth: {
          required: helpers.withMessage("O campo não poderá ser nulo", required),
          greaterThan18: helpers.withMessage(
            "Deverá ser maior que 18 anos para se cadastrar",
            greaterThan18
          ),
        },
        phone: {
          required: helpers.withMessage("O campo não poderá ser nulo", required),
          validatephone: helpers.withMessage("Número inválido", validatePhone),
        },
        city: {
          required: helpers.withMessage("O campo não poderá ser nulo", required),
        },
        state: {
          required: helpers.withMessage("O campo não poderá ser nulo", required),
        },
        adress: this.isAdminRegister
          ? {
              required: helpers.withMessage("O campo não poderá ser nulo", required),
            }
          : {},
        district: this.isAdminRegister
          ? {
              required: helpers.withMessage("O campo não poderá ser nulo", required),
            }
          : {},
        cep: this.isAdminRegister
          ? {
              required: helpers.withMessage("O campo não poderá ser nulo", required),
              minLength: helpers.withMessage("O campo de CEP deverá ter no mínimo 8 caracteres", minLength(8))
            }: {}
        },
      }
    },
    setup() {
        const store = useStore()
        const userService: UserService | undefined = inject<UserService>('userService');
        const cepService: CepService | undefined = inject<CepService>('cepService');

        return { 
          v$: useVuelidate(),
          store,
          userService,
          cepService
        }
    },
})
</script>

<style src="./styles/Register.css" scoped></style>
<style src="./styles/RegisterInput.css" scoped></style>
