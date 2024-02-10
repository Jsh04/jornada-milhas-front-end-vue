<template>
    <section class="tableDestiny">
        <article>
            <div>
                <h2>Destinos</h2>
            </div>
        </article>
        <article class="tableDestiny__table-container">
            <div class="tableDestiny__table">
                <table class="tableDestiny__table-content table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >

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

export default defineComponent({
    name: "DestinyTableComponent",
    data() {
        return {
            
        }
    },
    methods: {
        async getDestinysFromApi(){
            await  this.store.dispatch(DESTINATION_ALL_GET, {page: 0, size: 10});

        }
    },
    
    async mounted() {
        await this.getDestinysFromApi()
        console.log(this.ListDestination);
        
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
</style>