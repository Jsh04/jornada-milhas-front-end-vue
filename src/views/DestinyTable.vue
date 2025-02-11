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
                        <tr v-for="(destiny, index) in ListDestinies" :key="index" >
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
import { defineComponent, inject } from 'vue';
import Destination from '@/domain/entities/Destination';
import { useStore } from '@/store';
import Loader from '@/components/shared/Loader.vue';
import IAlertModal from '@/application/interfaces/alert/IAlertModal';
import { DestinyService } '@/presentation/DestinyService';
import FormatMoney from '@/common/formats/FormatMoney';


export default defineComponent({
    name: "DestinyTableComponent",
    components: { Loader },
    computed: {
        
    },
    data() {
        return {
            isLoading: false,
            page: 1,
            size: 10,
            ListDestinies: [] as Destination[]
        }
    },
    methods: {
        async getDestinysFromApi(){
            this.ListDestinies = await this.destinyController.getAllDestinies(this.size, this.page);
        },
        ReturnMaskPrice(price: number){
            const priceToConverted = price * 100;
            return FormatMoney.FormatMoney(priceToConverted.toString())
        },
        async DeleteDestiny(id: number){
            console.log(id);
            
           
        },
        EditDestiny(id: number){
            this.$router.push(`/admin/destino/editar/${id}`)
        }
    },
    async mounted() {
        await this.getDestinysFromApi()
    },
    setup(){
        const store = useStore();
        const alertModal = inject<IAlertModal>("AlertModal");
        const destinyController = inject<DestinyController>("DestinyController");

        if (!destinyController) 
            throw new Error("Instância não pode ser iniciada, tente novamente mais tarde");
        
        return {
            store,
            alertModal,
            destinyController
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
</style>