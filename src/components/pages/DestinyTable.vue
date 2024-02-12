<template>
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
                            <th></th>
                            <th></th>
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
import { DESTINATION_ALL_GET } from '@/store/actions/DestinyActions'
import swal from 'sweetalert';
import Util from '@/util/Util';

export default defineComponent({
    name: "DestinyTableComponent",
    data() {
        return {
            
        }
    },
    methods: {
        async getDestinysFromApi(){
            try {
                await this.store.dispatch(DESTINATION_ALL_GET, {page: 0, size: 10});
            } catch (error) {
                swal({
                    icon:"error",
                    title: "Erro ao buscar destinos"
                })
            }
        },
        ReturnMaskPrice(price: number){
            const priceToConverted = price * 100;
            return Util.FormatMoney(priceToConverted.toString())
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
</style>