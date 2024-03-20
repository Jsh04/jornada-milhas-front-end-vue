<template>
    <section class="registerDestiny">
        <article class="registerDestiny__container">
            <div class="registerDestiny__title">
                <h2 class="ff-roboto">{{ title }}</h2>
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
                            id="name"
                            name="Name"
                            placeholder="Digite o nome do destino"
                            @blur="v$.Destiny.name.$touch"
                            v-model.trim="Destiny.name"/>
                            
                            <label class="ff-roboto">Nome do Destino</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.name.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div  class="register__form-input">
                            <input
                            style="width: calc(530px - 3rem)"
                            type="text"
                            class="ff-roboto"
                            id="Subtitle"
                            name="Name"
                            placeholder="Digite um breve subtítulo"
                            @blur="v$.Destiny.subtitle.$touch"
                            v-model.trim="Destiny.subtitle"
                            />

                            <label class="ff-roboto">Descreva um subtítulo</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.subtitle.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div  class="register__form-input">
                            <input
                            style="width: calc(530px - 3rem)"
                            type="text"
                            class="ff-roboto"
                            name="Name"
                            id="Price"
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
                            <textarea @blur="v$.Destiny.descriptionPortuguese.$touch"  class="register__form-textarea ff-roboto" v-model="Destiny.descriptionPortuguese" id="DescriptionPortuguese" cols="30" rows="10" placeholder="Digite uma descrição do destino na língua portuguesa"></textarea>
                            <label class="ff-roboto">Descrição em Português</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.descriptionPortuguese.$errors" :key="index">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div  class="register__form-input">
                            <textarea @blur="v$.Destiny.descriptionEnglish.$touch" class="register__form-textarea ff-roboto" v-model="Destiny.descriptionEnglish" id="DescriptionEnglish" cols="30" rows="10" placeholder="Digite uma descrição do destino na língua inglesa"></textarea>
                            <label class="ff-roboto">Descrição em Inglês</label>
                            <span class="message_error ff-roboto" v-for="(error, index) in v$.Destiny.descriptionEnglish.$errors" :key="index">
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
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core';
import { AxiosResponse, HttpStatusCode } from 'axios';
import 'filepond/dist/filepond.min.css';

import * as FilePondeInstance from 'filepond';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import Destination from '@/models/Destination';
import { useStore } from '@/store';
import { helpers, required } from '@vuelidate/validators';
import Util from '@/util/Util'
import swal from 'sweetalert';
import { DESTINATION_GET_BY_ID, DESTINATION_POST, DESTINATION_PUT_UPDATE } from '@/store/actions/DestinyActions';
export default defineComponent({
    props: {
        isEdit: {
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
                name: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                },
                subtitle: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                },
                descriptionPortuguese: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                },
                descriptionEnglish: {
                    required: helpers.withMessage("O campo não poderá ser nulo", required)
                }
            }
        }
    },
    methods: {
        async SendForms(): Promise<void>{  
            let response: AxiosResponse = {} as AxiosResponse;  
            let textModal = '';        
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
                this.Destiny.pictures = await this.ReturnBase64Array();
                this.Destiny.price = parseFloat(this.Price.replace("R$", "").replace(",", "."))

                if (this.isEdit) {
                    const id = this.$route.params.id;
                    response = await this.store.dispatch(DESTINATION_PUT_UPDATE, {Destiny: this.Destiny, Id: id});
                }else
                    response = await this.store.dispatch(DESTINATION_POST, this.Destiny);
                
                if (response.status >= HttpStatusCode.NoContent) 
                    textModal = "Destino atualizado com sucesso"
                else
                    textModal = "Destino Cadastrado com sucesso";

                swal({
                    text: textModal,
                    buttons: [true, 'Ok'],
                    icon: 'sucess'
                })
                this.v$.$reset();
                this.$router.push('/admin/destino')
  
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
        async getDestinyEdit(){     
            const id = this.$route.params.id;
            await this.store.dispatch(DESTINATION_GET_BY_ID, id);
            this.Destiny = this.store.state.destinyModule.DestinyEdit

            this.Price = Util.formatNumberInMaskPrice(this.Destiny.price);

            this.Destiny.pictures.forEach(picture => {
                this.filePond?.addFile(Util.returnByteArrayFile(picture));
            })
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
    async mounted() {
        const inputFile = this.$refs.inputFile as Element | undefined;

        FilePondeInstance.registerPlugin(FilePondPluginFileValidateSize);
        this.filePond = FilePondeInstance.create(inputFile, {
            labelIdle: '<span>Arraste ou procure as imagens do destino</span>',
            allowMultiple: true,
            labelFileLoadError: '<span>Erro ao carregar o arquivo</span>',
            maxFiles: 3,
            maxFileSize:"1MB",
            
        });
        if (this.isEdit) {
            await this.getDestinyEdit();
            this.v$.$touch
        }
            
        
            
        
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

<style src="./styles/DestinyForm.css" scoped></style>@/util/Util