<template>
  <Banner :url-image="UrlImage" style="height: 100px" />
  <section class="register">
    <article class="register__container">
      <div class="register__title">
        <h2 class="ff-roboto">Crie sua conta</h2>
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
              v-model.trim="User.Name"
              @blur="v$.User.Name.$touch"
            />
            <label class="ff-roboto">Nome</label>
          </div>
          <div class="register__container-fields">
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="date"
                class="ff-roboto"
                placeholder="XX/XX/XXXX"
                v-model="User.DtBirth"
              />
              <label class="ff-roboto">Data de nascimento</label>
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

              />
              <label class="ff-roboto">CPF</label>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Digite seu telefone"
                v-model="User.Phone"
              />
              <label class="ff-roboto">Telefone</label>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="text"
                class="ff-roboto"
                placeholder="Digite seu cidade"
                v-model="User.City"
              />
              <label class="ff-roboto">Cidade</label>
            </div>
            <div class="register__form-input">
              <select v-model="User.State" style="width: calc((530px / 2) - 6px)" class="ff-roboto">
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
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="email"
                class="ff-roboto"
                v-model="User.Email"
                placeholder="Digite seu e-mail"
              />
              <label class="ff-roboto">E-mail</label>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="email"
                class="ff-roboto"
                placeholder="Digite seu e-mail novamente"
              />
              <label class="ff-roboto">Confirmar e-mail</label>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="password"
                class="ff-roboto"
                v-model="User.Password"
                placeholder="Digite sua senha"
              />
              <label class="ff-roboto">Senha</label>
            </div>
            <div class="register__form-input">
              <input
                style="width: calc((530px / 2) - 3rem)"
                type="password"
                class="ff-roboto"
                v-model="User.ConfirmPassword"
                placeholder="Repita sua senha"
              />
              <label class="ff-roboto">Confirmar Senha</label>
            </div>
          </div>
          <div class="register__form-checkbox">
            <input id="terms" type="checkbox">
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
import Banner from "../../Banner/Banner.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import User from '@/models/User'
import { useStore } from "@/store/index"
import { REGISTER_USER } from "@/store/actions/UserActions";

export default defineComponent({
  name: "RegisterComponent",
  components: { Banner },
  data() {
    return {
      UrlImage: require("@/assets/Imagens/4-Banner-cadastro.png"),
      User: {
      } as User,
    };
  },
  methods: {
    async SendForms(){
      const formValidity = await this.v$.$validate();
      
      if (!formValidity) {
        alert("Formulário inválido")
      }
      const response = await this.store.dispatch(REGISTER_USER, this.User)
      console.log(response);
      

    }
  },
  validations(){
    return {
      User: {
        Name: { required: helpers.withMessage("O campo não poderá ser nulo", required) },
        Email: {
          email: helpers.withMessage("O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com", email),
          required: helpers.withMessage("O campo deverá ser obrigatório", required) 
        },
        Cpf: {
          required: helpers.withMessage("O campo deverá ser obrigatório", required) 
        }
      },
    }
  },
  setup() {
    const store = useStore()
    return { 
      v$: useVuelidate(),
      store
    }
  },
});
</script>

<style scoped src="./styles/Register.css"></style>
<style src="./styles/RegisterInput.css" scoped></style>
