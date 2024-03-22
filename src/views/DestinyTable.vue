<template>
    <Loader :isActive="isLoading" />
    <section class="tableDestiny">
        <article class="tableDestiny__container">
            <div class="tableDestiny__container-title">
                <h2 class="tableDestiny__container-title-content">Destinos</h2>
            </div>
            <div class="tableDestiny__table">
                <table class="tableDestiny__table-content table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(destiny, index) in ListDestination" :key="index" >
                            <td>{{ destiny.id }}</td>
                            <td>{{ destiny.name }}</td>
                            <td>{{ ReturnMaskPrice(destiny.price) }}</td>
                            <td @click="EditDestiny(destiny.id)" class="cell__click"><i style="font-size: 32px;" class="las la-edit "></i></td>
                            <td @click="DeleteDestiny(destiny.id)" class="cell__click"><i style="font-size: 32px;" class="las la-trash"></i></td>
                        </tr>
                    </tbody>     
                </table>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Destination from '@/models/Destination';
import { useStore } from '@/store';
import { DESTINATION_ALL_GET, DESTINATION_DELETE_BY_ID } from '@/store/actions/DestinyActions'
import swal from 'sweetalert';
import Util from '@/util/Util';
import { AxiosResponse } from 'axios';
import Loader from '@/components/shared/Loader.vue';


export default defineComponent({
    name: "DestinyTableComponent",
    components: { Loader },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        async getDestinysFromApi(){
            this.isLoading = true
            try {
                await this.store.dispatch(DESTINATION_ALL_GET, {page: 0, size: 10});
            } catch (error) {
                swal({
                    icon:"error",
                    title: "Erro ao buscar destinos"
                })
            } finally {
                this.isLoading = false
            }
        },
        ReturnMaskPrice(price: number){
            const priceToConverted = price * 100;
            return Util.FormatMoney(priceToConverted.toString())
        },
        async DeleteDestiny(id: string){
            try {
                const response: AxiosResponse = await this.store.dispatch(DESTINATION_DELETE_BY_ID, id);
                if(response.status == 204)
                    swal({
                        title: "Destino Deletado com sucesso",
                        icon: 'sucess',
                        buttons: [true, "Ok"]
                    })
                await this.getDestinysFromApi()
            } catch (error) {
                swal({
                        title: "Erro ao deletar destino",
                        icon: 'error',
                        buttons: [true, "Ok"]
                    })
            }
           
        },
        EditDestiny(id: string){
            this.$router.push(`/admin/destino/editar/${id}`)
            
        }
    },
    async mounted() {
        await this.getDestinysFromApi()
    },
    setup(){
        const store = useStore();
        return {
            store,
            ListDestination: computed(() => store.state.destinyModule.Destinys as Destination[]) 
        }
    }
})
</script>

<style scoped>
.tableDestiny{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tableDestiny__container{
    width: 60%;
    margin: 3rem auto;
    padding: 4rem;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0px 1px 2px 0px black;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}
.cell__click{
    cursor: pointer;
}
</style>@/util/Util