import Destination from "@/models/Destination";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";

export const key: InjectionKey<Store<State>> = Symbol();

interface State {
    destinys: Destination[]
}

export const store = createStore<State>({
    state: {
        destinys: [
            {
                Id: 1,
                Name: 'Atacama',
                Price: 500.00,
                PictuteTest: require('@/assets/Imagens/Card-Atacama.png')

            } as Destination,
            {
                Id: 2,
                Name: 'Veneza',
                Price: 500.00,
                PictuteTest: require('@/assets/Imagens/Card-Veneza.png')
            } as Destination,
            {
                Id: 3,
                Name: 'Patagonia',
                Price: 500.00,
                PictuteTest: require('@/assets/Imagens/Card-Patagonia.png')

            } as Destination,
            {
                Id: 4,
                Name: 'Grand Canyon',
                Price: 500.00,
                PictuteTest: require('@/assets/Imagens/Card-Grand-Canyon.png')

            } as Destination,
            {
                Id: 5,
                Name: 'Turquia',
                Price: 500.00,
                PictuteTest: require('@/assets/Imagens/Card-Turquia.png')
            } as Destination,
            {
                Id: 6,
                Name: 'Cordilheira dos Andes',
                Price: 500.00,
                PictuteTest: require('@/assets/Imagens/Card-Cordilheira-dos-Andes.png')

            } as Destination
        ]
    }
})


export function useStore(): Store<State> {
    return vuexUseStore(key)
}