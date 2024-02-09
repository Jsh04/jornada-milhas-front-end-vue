<template>
    <section class="registerDestiny">
        <article class="registerDestiny__container">
            <div class="registerDestiny__title">
                <h2 class="ff-roboto">Cadastre um novo Destino</h2>
            </div>
            <div class="registerDestiny__form-container">
                <form @submit.prevent="SendForms()" action="" class="register__form">
                    <div class="register__form-input-file ">
                        <label class="register__form-input-file-label ff-roboto" for="file">Imagens do destino</label>
                        <input type="file" ref="inputFile" multiple accept=".png, .jpg, .jpeg">
                        
                    </div>
                    <div class="registerDestiny__container-fields">
                        <div style="margin-top: 1rem;" class="register__form-input">
                            <input
                            style="width: calc(530px - 3rem)"
                            type="text"
                            class="ff-roboto"
                            name="Name"
                            placeholder="Digite o nome do destino"
                            @blur="v$.Destiny.Name.$touch"
                            v-model.trim="Destiny.Name"/>
                            
                            <label class="ff-roboto">Nome do Destino</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.Name.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div  class="register__form-input">
                            <input
                            style="width: calc(530px - 3rem)"
                            type="text"
                            class="ff-roboto"
                            name="Name"
                            placeholder="Digite um breve subtítulo"
                            @blur="v$.Destiny.Subtitle.$touch"
                            v-model.trim="Destiny.Subtitle"/>

                            <label class="ff-roboto">Descreva um subtítulo</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.Subtitle.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div  class="register__form-input">
                            <input
                            style="width: calc(530px - 3rem)"
                            type="text"
                            class="ff-roboto"
                            name="Name"
                            placeholder="Digite o preço do destino"
                            v-model.trim="Price"
                            @blur="v$.Price.$touch"
                            @keyup="MaskPrice()"
                            />

                            <label class="ff-roboto">Preço</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Price.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div  class="register__form-input">
                            <textarea @blur="v$.Destiny.DescriptionPortuguese.$touch"  class="register__form-textarea ff-roboto" v-model="Destiny.DescriptionPortuguese" id="" cols="30" rows="10" placeholder="Digite uma descrição do destino na língua portuguesa"></textarea>
                            <label class="ff-roboto">Descrição em Português</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.DescriptionPortuguese.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div  class="register__form-input">
                            <textarea @blur="v$.Destiny.DescriptionEnglish.$touch" class="register__form-textarea ff-roboto" v-model="Destiny.DescriptionEnglish" id="" cols="30" rows="10" placeholder="Digite uma descrição do destino na língua inglesa"></textarea>
                            <label class="ff-roboto">Descrição em Inglês</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.DescriptionEnglish.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        
                    </div>
                    <div class="register__form-btn-container">
                        <button class="register__form-btn ff-roboto" type="submit">Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        </article>

    </section>

</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { AxiosResponse } from 'axios';
import 'filepond/dist/filepond.min.css';

import * as FilePondeInstance from 'filepond';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import Destination from '@/models/Destination';
import { useStore } from '@/store';
import { decimal, helpers, required } from '@vuelidate/validators';
import Util from '@/util/Util'
import swal from 'sweetalert';
import { DESTINATION_POST } from '@/store/actions/DestinyActions';


export default defineComponent({
    name: "DestinyRegisterComponent",
    data() {
        return {
            filePond: null as FilePondeInstance.FilePond | null,
            Destiny: {} as Destination,
            Price: '',
            Files: null
        }
    },
    components: { },
    validations(){
        return {
            Price: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                },
            Destiny: {
                Name: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                },
                Subtitle: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                },
                DescriptionPortuguese: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                },
                DescriptionEnglish: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                }
            }
        }
    },
    methods: {
        async SendForms(): Promise<void>{            
            try {
                const formValidity = await this.v$.$validate();                
                if(!formValidity || this.filePond?.getFiles().length == 0){
                    swal({
                        text: "Formulário inválido",
                        buttons: [true, 'Ok'],
                        icon: 'error'
                    })
                    return;
                }
                this.Destiny.Pictures = await this.ReturnBase64Array();
                
                this.Destiny.Price = parseFloat(this.Price.replace("R$", "").replace(",", "."))
                const response: AxiosResponse<Destination, any> = await this.store.dispatch(DESTINATION_POST, this.Destiny);
                if (response.status >= 200) {
                    swal({
                        text: "Destino cadastrado com sucesso",
                        buttons: [true, 'Ok'],
                        icon: 'sucess'
                    })
                    this.v$.$reset();
                }
            } catch (error) {
                swal({
                        text: "Erro ao cadastrar Destino",
                        buttons: [true, 'Ok'],
                        icon: 'error'
                    })
            }
        },
        MaskPrice(){
            this.Price = Util.FormatMoney(this.Price);
        },
        async ReturnBase64Array(): Promise<string[]>{
            const arrayBase64: string[] = [];
            const promises: Promise<void>[] = [];

            this.filePond?.getFiles().forEach(fileItem => {
                const file = fileItem.file;

                const promise = new Promise<void>((resolve, reject) => {
                    let reader = new FileReader();
                    reader.onloadend = () => { 
                        let dataUrl = reader.result;
                        arrayBase64.push(dataUrl as string);
                        resolve();
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file as Blob);
                });

                promises.push(promise);
            });

            await Promise.all(promises);
            
            return arrayBase64;
        }

    },
    mounted() {
        const inputFile = this.$refs.inputFile as Element | undefined;

        FilePondeInstance.registerPlugin(FilePondPluginFileValidateSize);
        this.filePond = FilePondeInstance.create(inputFile, {
            labelIdle: '<span>Arraste ou procure as imagens do destino</span>',
            allowMultiple: true,
            labelFileLoadError: '<span>Erro ao carregar o arquivo</span>',
            maxFiles: 3,
            maxFileSize:"1MB",
            
        });
    },
    setup() {
        const store = useStore();
        return { 
            store,
            v$: useVuelidate()
        }
    }
})

</script>

<style scoped>
.registerDestiny{
    margin: 3rem 0;
    display: flex;
    justify-content: center;
}

.registerDestiny__container{
    width: 530px;
    padding: 4rem;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 1px 2px 0px black;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}

.registerDestiny__title h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    color: black;
    text-align: center;
  }

  .register__form-input-file{
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .register__form-input-file-label{
    font-size: 16px;
    color: black;
    font-style: normal;
    font-weight: 400;
  }

  .registerDestiny__container-fields{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

  }

  .register__form-textarea{
    resize: none;
    width: calc(530px - 2.5rem);
    border-radius: 5px;
    border: 2px solid black;
    padding: 1rem;
}
.register__form-textarea::placeholder{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.035px;
    color: #CAC4D0;
    font-family: 'Roboto';

}

.register__form-btn-container{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  
  .register__form-btn{
    padding: 1rem 1rem;
    background-color: var(--purple-primary);
    color: white;
    border-radius: 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
    cursor: pointer;
  }

</style>
<style src="../../shared/FormRegister/styles/RegisterInput.css" ></style>