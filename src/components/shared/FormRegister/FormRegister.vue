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
              name="Name"
              placeholder="Digite seu nome completo"
              :class="[v$.User.Name.$errors.length > 0 ? 'register__input_erro' : '']"
              v-model.trim="User.Name"
              @blur="v$.User.Name.$touch"
            />
            <label class="ff-roboto">Nome</label>
            <span class="message_error ff-roboto" v-for="(error, index) in v$.User.Name.$errors" :key="index">
              {{ error.$message }}
            </span>
          </div>
          <div style="margin-top: 2rem;" class="register__form-input" v-if="isAdminRegister">
            <input
              style="width: calc(530px - 3rem)"
              type="text"
              class="ff-roboto"
              name="Name"
              placeholder="Digite seu nome completo"
              :class="[v$.User.CodeEmployee.$errors.length > 0 ? 'register__input_erro' : '']"
              v-model.trim="User.CodeEmployee"
              minlength="8"
              @blur="v$.User.CodeEmployee.$touch"
            />
            <label class="ff-roboto">Código do Funcionário</label>
            <span class="message_error ff-roboto" v-for="(error, index) in v$.User.CodeEmployee.$errors" :key="index">
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
                v-model="User.DtBirth"
                @blur="v$.User.DtBirth.$touch"
              />
              <label class="ff-roboto">Data de nascimento</label>
              <span class="message_error ff-roboto" v-for="(error, index) in v$.User.DtBirth.$errors" :key="index">
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-genre">
                <label class="ff-roboto register__form-genre-label">Gênero</label>
                <div class="register__form-radios">
                    <div class="register__form-radios-container">
                      <label for="female" class="ff-roboto">Feminino</label>
                      <input type="radio" v-model="User.Genre" value="Female" name="genre" id="female">
                    </div>
                    <div class="register__form-radios-container">
                      <label for="male" class="ff-roboto">Masculino</label>
                      <input type="radio" v-model="User.Genre" value="Male" name="genre" id="male">
                    </div>
                    <div class="register__form-radios-container">
                      <label for="notInfo" class="ff-roboto">Prefiro não informar</label>
                      <input type="radio" v-model="User.Genre" value="NotInfo" name="genre" id="notInfo">
                    </div>
                </div>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="XXX.XXX.XXX-XX"
                v-model="User.Cpf"
                @blur="v$.User.Cpf.$touch"
              />
              <label class="ff-roboto">CPF</label>
              <span v-if="v$.User.Cpf.$errors.length != 0" class="message_error ff-roboto">
                {{ v$.User.Cpf.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Digite seu telefone"
                v-model="User.Phone"
                maxlength="15"
                @blur="v$.User.Phone.$touch"
                @keyup="MaskPhone()"
              />
              <label class="ff-roboto">Telefone</label>
              <span v-if="v$.User.Phone.$errors.length != 0" class="message_error ff-roboto">
                {{ v$.User.Phone.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input" v-if="isAdminRegister">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Digite seu CEP"
                v-model="User.Cep"
                minlength="8"
                maxlength="9"
                @blur="[v$.User.Cep.$touch, GetInfoAdress()]"
              />
              <label class="ff-roboto">CEP</label>
              <span class="message_error ff-roboto" v-for="(error, index) in v$.User.Cep.$errors" :key="index">
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Digite seu cidade"
                v-model="User.City"
                @blur="v$.User.City.$touch"
              />
              <label class="ff-roboto">Cidade</label>
              <span class="message_error ff-roboto" v-for="(error, index) in v$.User.City.$errors" :key="index">
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-input">
              <select v-model="User.State" style="width: calc((530px / 2) - 6px)" class="ff-roboto" @blur="v$.User.State.$touch" :disabled="isAdminRegister">
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
              <span class="message_error ff-roboto" v-for="(error, index) in v$.User.State.$errors" :key="index">
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-input" v-if="isAdminRegister">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Seu endereço"
                v-model="User.Adress"
                @blur="v$.User.Adress.$touch"
                :disabled="isAdminRegister"
              />
              <label class="ff-roboto">Endereço</label>
              <span class="message_error ff-roboto" v-for="(error, index) in v$.User.Adress.$errors" :key="index">
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-input" v-if="isAdminRegister">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Seu bairro"
                v-model="User.District"
                :disabled="isAdminRegister"
                @blur="[v$.User.District.$touch]"
              />
              <label class="ff-roboto">Bairro</label>
              <span class="message_error ff-roboto" v-for="(error, index) in v$.User.District.$errors" :key="index">
                {{ error.$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="email"
                class="ff-roboto"
                v-model="User.Email"
                placeholder="Digite seu e-mail"
                @blur="v$.User.Email.$touch"
                
              />
              <label class="ff-roboto">E-mail</label>
              <span v-if="v$.User.Email.$errors.length != 0" class="message_error ff-roboto">
                {{ v$.User.Email.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="email"
                class="ff-roboto"
                placeholder="Digite seu e-mail novamente"
                v-model="User.ConfirmEmail"
                @blur="v$.User.ConfirmEmail.$touch"
              />
              <label class="ff-roboto">Confirmar e-mail</label>
              <span v-if="v$.User.ConfirmEmail.$errors.length != 0" class="message_error ff-roboto">
                {{ v$.User.ConfirmEmail.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="password"
                class="ff-roboto"
                v-model="User.Password"
                placeholder="Digite sua senha"
                @blur="v$.User.Password.$touch"
              />
              <label class="ff-roboto">Senha</label>
              <span v-if="v$.User.Password.$errors.length != 0" class="message_error ff-roboto">
                {{ v$.User.Password.$errors[0].$message }}
              </span>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="password"
                class="ff-roboto"
                v-model="User.ConfirmPassword"
                placeholder="Repita sua senha"
                @blur="v$.User.ConfirmPassword.$touch"
              />
              <label class="ff-roboto">Confirmar Senha</label>
              <span v-if="v$.User.ConfirmPassword.$errors.length != 0" class="message_error ff-roboto">
                {{ v$.User.ConfirmPassword.$errors[0].$message }}
              </span>
            </div>
          </div>
          <div class="register__form-checkbox">
            <input id="terms" v-model="checkedTerms" type="checkbox">
            <label for="terms" class="ff-roboto">Li e aceito os termos e condições deste cadastro.</label>
          </div>
          <div class="register__form-btn-container">
            <button class="register__form-btn ff-roboto" type="submit">criar minha conta</button>
          </div>
        </form>
      </div>
    </article>
  </section>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import User from '../../../models/User'
import { Role } from '@/models/enums/EnumsRole'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, sameAs, minLength} from '@vuelidate/validators'
import { useStore } from "../../../store"
import { REGISTER_USER, GET_INFO_ADRESS } from "../../../store/actions/UserActions";
import swal from 'sweetalert';
import {validateCpf} from "../../../validations/ValidationCPF"
import { greaterThan18 } from "../../../validations/ValidationBirthDate";
import { validatePhone } from "../../../validations/ValidationPhone";
import CepResponseDTO from "@/interfaces/CepResponseDTO";
import { AxiosResponse } from "axios";

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
        User: {
        } as User,
        checkedTerms: false
        };
    },
    methods: {
        async SendForms(){
        if (!this.checkedTerms) {
            swal({
            text: "Confirme que leu nossos termos e condições",
            buttons: [true, "Sair"],
            icon: "warning"
            })
            return;
        }
        
        const formValidity = await this.v$.$validate();
        if (!formValidity) {
            alert("Formulário inválido")
            return;
        }
        try{
            if (this.isAdminRegister) 
              this.User.UserRole = Role.Admin
            else
              this.User.UserRole = Role.Limited
            const response = await this.store.dispatch(REGISTER_USER, this.User);
            if (response.status == 201) {
                swal({
                icon: "success",
                text:"Usuário cadastrado com sucesso",
                buttons: [true, "Ok!"]
                })
                this.User = {} as User
                this.v$.$reset();
            }
                
            
        }catch(erro){
            swal({
                text:"Erro ao cadastrar usuário",
                icon: "error",
                buttons: [true, "Ok"]
            })
          }
        },
        async GetInfoAdress(){
          const cepConverted = this.User.Cep.replace(/\D/g, "");
          try {
            const response: AxiosResponse<CepResponseDTO, any> = 
              await this.store.dispatch(GET_INFO_ADRESS, cepConverted);
            this.FillInputsAdress(response);
            
          } catch (error) {
            swal({
              title: "Não foi possível recuperar os dados do CEP",
              icon: "error",
              buttons: [true, "Ok"]
            })
          }
        },
        FillInputsAdress(response: AxiosResponse<CepResponseDTO, any>){
          this.User.Adress = response.data.logradouro
          this.User.District = response.data.bairro
          this.User.City = response.data.localidade
          this.User.State = response.data.uf
        },
        MaskPhone(): void{
        var r = this.User.Phone.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 10) {
            r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 5) {
            r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
            r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            r = r.replace(/^(\d*)/, "($1");
        }
        this.User.Phone = r
        },
    },
    validations(){
        return {
        User: {
            Name: { required: helpers.withMessage("O campo não poderá ser nulo", required) },
            Email: {
            email: helpers.withMessage("O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com", email),
            required: helpers.withMessage("O campo deverá ser obrigatório", required) 
            },
            CodeEmployee: {
              required: helpers.withMessage("O campo deverá ser obrigatório", required),
              minLength: helpers.withMessage("O campo deverá ter no mínimo 8 caracteres", minLength(8))
            },
            
            ConfirmEmail: {
            email: helpers.withMessage("O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com", email),
            required: helpers.withMessage("O campo deverá ser obrigatório", required),
            sameAsEmail: helpers.withMessage("O email deverá ser igual ao email digitado anteriormente", sameAs(this.User.Email))  
            },
            ConfirmPassword:{
            required: helpers.withMessage("O campo deverá ser obrigatório", required),
            sameAsPassword: helpers.withMessage("O senha deverá ser a mesma digitada anteriormente", sameAs(this.User.Password))
            },
            Password: {
            required: helpers.withMessage("O campo não poderá ser nulo", required),
            },
            Cpf: {
            required: helpers.withMessage("O campo deverá ser obrigatório", required),
            validateCpf: helpers.withMessage("CPF inválido", validateCpf)
            },
            DtBirth: {
            required: helpers.withMessage("O campo não poderá ser nulo", required),
            greaterThan18: helpers.withMessage("Deverá ser maior que 18 anos para se cadastrar", greaterThan18)
            },
            Phone: {
            required: helpers.withMessage("O campo não poderá ser nulo", required),
            validatePhone: helpers.withMessage("Número inválido", validatePhone)
            },
            City: {
            required: helpers.withMessage("O campo não poderá ser nulo", required)
            },
            State:{
            required: helpers.withMessage("O campo não poderá ser nulo", required)
            },
            Adress: {
              required: helpers.withMessage("O campo não poderá ser nulo", required)
            },
            District: {
              required: helpers.withMessage("O campo não poderá ser nulo", required)
            },
            Cep: {
              required: helpers.withMessage("O campo não poderá ser nulo", required),
              minLength: helpers.withMessage("O campo de CEP deverá ter no mínimo 8 caracteres", minLength(8))
            }
        },
      }
    },
    mounted(){
      if (!this.isAdminRegister) {
        this.v$.User.CodeEmployee.$invalid = false
      }
    },
    setup() {
        const store = useStore()
        return { 
        v$: useVuelidate(),
        store
        }
    },
})
</script>

<style src="./styles/Register.css" scoped></style>
<style src="./styles/RegisterInput.css" scoped></style>

