import { container } from "tsyringe";
import { InjectionTokenAlertModal, 
    InjectionTokenAxiosClient, 
    InjectionTokenCepRequest, 
    InjectionTokenDestinyController, 
    InjectionTokenDestinyRepository, 
    InjectionTokenLoginController, 
    InjectionTokenLoginRequest, 
    InjectionTokenStoreDestination, 
    InjectionTokenStoreObj, 
    InjectionTokenStoreUser, 
    InjectionTokenTokenService, 
    InjectionTokenUseCaseGetAllDestinies, 
    InjectionTokenUseCasePostLoginToUser 
} from "../constants/InjectionTokens";
import CepRequest from "@/infraestruture/gateway/CepRequest";
import AxiosClient from "@/infraestruture/api/HttpClient";
import ILoginRequest from "@/application/interfaces/services/ILoginRequest";
import LoginRequest from "@/infraestruture/repository/LoginRequest/LoginRequest";
import PostLoginUser from "@/application/useCases/PostLoginUser/PostLoginUser";
import ICepRequest from "@/application/interfaces/services/ICepRequest";
import IAlertModal from "@/application/interfaces/alert/IAlertModal";
import AlertModalSweet from "@/infraestruture/alerts/AlertModal";
import ITokenService from "@/application/interfaces/services/ITokenService";
import TokenService from "@/infraestruture/services/TokenService";
import IPostLoginUser from "@/application/interfaces/useCases/IPostLoginUser";
import LoginController from "@/presentation/LoginController";
import IStoreService from "@/application/interfaces/services/IStoreService";
import { StateUser } from "@/store/modules/UserModule";
import StoreUser from "@/infraestruture/store/StoreUser";
import { State, useStore } from "@/store";
import { Store } from "vuex";
import IDestinyRepository from "@/domain/interfaces/IDestinyRepository";
import { DestinyRepository } from "@/infraestruture/repository/DestinyRespository/DestinyRepository";
import { StateDestination } from "@/store/modules/DestinyModule";
import StoreDestination from "@/infraestruture/store/StoreDestination";
import IGetAllDestinies from "@/application/interfaces/useCases/destiny/IGetDestinies";
import GetAllDestinies from "@/application/useCases/GetDestinys/GetAllDestinies";
import { DestinyController } from "@/presentation/DestinyController";


export default class DependencyInjection {

    public static addDependencyInjectionConfig(){
        this.addDependenciesInjectionInfraestruture();
        this.addDependenciesInjectionApplication();
        this.addDependenciesInjectionPresentation();
        this.addDependenciesInjectionStores();
    }

    private static addDependenciesInjectionApplication(){
        container.register<ICepRequest>(InjectionTokenCepRequest, { useClass: CepRequest });
        container.register<IAlertModal>(InjectionTokenAlertModal, { useClass: AlertModalSweet });
        container.register<ITokenService>(InjectionTokenTokenService, { useClass: TokenService});
       this.addDependenciesInjectionUseCases();
    }

    private static addDependenciesInjectionUseCases(){
        container.register<IPostLoginUser>(InjectionTokenUseCasePostLoginToUser, { useClass: PostLoginUser });
        container.register<IGetAllDestinies>(InjectionTokenUseCaseGetAllDestinies, { useClass: GetAllDestinies })
    }

    private static addDependenciesInjectionInfraestruture(){
        container.registerSingleton<AxiosClient>(InjectionTokenAxiosClient, AxiosClient);
        container.register<Store<State>>(InjectionTokenStoreObj, {useValue: useStore()});
        container.register<ILoginRequest>(InjectionTokenLoginRequest, { useClass: LoginRequest});
        container.register<IDestinyRepository>(InjectionTokenDestinyRepository, {useClass: DestinyRepository})
    }

    private static addDependenciesInjectionStores(){
        container.register<IStoreService<StateUser>>(InjectionTokenStoreUser, { useClass: StoreUser })
        container.register<IStoreService<StateDestination>>(InjectionTokenStoreDestination, {useClass: StoreDestination})
    }

    private static addDependenciesInjectionPresentation(){
        container.registerSingleton(InjectionTokenLoginController, LoginController);
        container.registerSingleton(InjectionTokenDestinyController, DestinyController);
    }
}