import Destination from "@/models/Destination";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { StateDepoiment,depoiment } from "./modules/DepoimentModule";
import { StateUser, user } from "./modules/UserModule";
import User from "@/models/User";
import { LoginModule, StateLogin } from "./modules/LoginModule";
import Login from "@/models/Login";

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
    destinys: Destination[],
    depoimentModule: StateDepoiment;
    userStateModule: StateUser,
    loginStateModule: StateLogin
}

export const store = createStore<State>({
    state: {
        destinys: [
            {
                Id: 1,
                Name: 'Atacama',
                Price: 500.00,
                PictuteTest: require('@/assets/Imagens/Card-Atacama.png'),
                Subtitle: 'A desert of wonder and awe.',
                DescriptionPortuguese: 'Além de suas maravilhas naturais, o Atacama oferece uma ampla variedade de atividades e experiências para os viajantes desfrutarem. Os entusiastas de aventura podem embarcar em excursões emocionantes, como a prática de sandboard nas dunas colossais ou fazer trilhas até as deslumbrantes lagoas turquesa escondidas no deserto. As fontes termais oferecem uma oportunidade perfeita para relaxar e rejuvenescer em meio ao ambiente árido. Os entusiastas da cultura podem explorar o rico patrimônio das comunidades indígenas que habitam a região há séculos, aprendendo sobre suas tradições, artesanato e modo de vida. Além disso, a proximidade do Atacama com a costa do Pacífico permite um itinerário diversificado, combinando a experiência no deserto com visitas a encantadoras cidades costeiras e praias. Se você busca aventuras cheias de adrenalina, beleza natural serena ou imersão cultural, o Atacama oferece uma jornada notável e inesquecível que atende aos desejos de cada viajante.',
                DescriptionEnglish: "Beyond its natural wonders, Atacama offers a wide range of activities and experiences for travelers to indulge in. Adventure enthusiasts can embark on thrilling excursions such as sandboarding down the colossal dunes or hiking to the stunning turquoise lagoons nestled within the desert. The geothermal springs provide a perfect opportunity to relax and rejuvenate amidst the arid surroundings. Cultural enthusiasts can explore the rich heritage of the indigenous communities that have inhabited the region for centuries, learning about their traditions, crafts, and way of life. Additionally, Atacama's proximity to the Pacific coast allows for a diverse itinerary, combining the desert experience with visits to charming coastal towns and beaches. Whether you seek adrenaline-pumping adventures, serene natural beauty, or cultural immersion, Atacama offers a remarkable and unforgettable journey that caters to every traveler's desires."
                
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
        ],
        depoimentModule: {
            depoiments: []
        },
        userStateModule: {
            user: {} as User
        },
        loginStateModule: {
            login: {} as Login
        }
    },
    modules:{
        depoiment,
        user,
        LoginModule
    }
})


export function useStore(): Store<State> {
    return vuexUseStore(key)
}