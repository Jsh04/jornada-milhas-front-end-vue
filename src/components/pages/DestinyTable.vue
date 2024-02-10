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
                </table>
            </div>
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Api } from 'datatables.net-dt'
import Datatable from 'datatables.net-dt'
import Destination from '@/models/Destination';
export default defineComponent({
    name: "DestinyTableComponent",
    data() {
        return {
            dataTable: {} as Api<Destination> 
        }
    },
    methods: {
        
    },
    
    mounted() {
        this.dataTable = new Datatable(".tableDestiny__table-content", {
            language: {
                url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/pt-BR.json",
            },

            
        });
    },
})
</script>

<style scoped>
.tableDestiny{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>