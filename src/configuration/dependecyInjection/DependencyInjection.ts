import { container } from "tsyringe";
import { InjectionTokenAlertModal, 
    InjectionTokenAxiosClient, 
    InjectionTokenCepRequest, 
    InjectionTokenLoginController, 
    InjectionTokenLoginRequest, 
    InjectionTokenTokenService, 
    InjectionTokenUseCasePostLoginToUser 
} from "./InjectionTokens";
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

export default class DependencyInjection {

    public static addDependencyInjectionConfig(){
        this.addDependenciesInjectionInfraestruture();
        this.addDependenciesInjectionApplication();
        this.addDependenciesInjectionPresentation();
    }

    private static addDependenciesInjectionApplication(){
        container.register<ICepRequest>(InjectionTokenCepRequest, { useClass: CepRequest });
        container.register(InjectionTokenUseCasePostLoginToUser, PostLoginUser);
        container.register<IAlertModal>(InjectionTokenAlertModal, { useClass: AlertModalSweet });
        container.register<ITokenService>(InjectionTokenTokenService, { useClass: TokenService});
        container.register<IPostLoginUser>(InjectionTokenUseCasePostLoginToUser, { useClass: PostLoginUser });
    }

    private static addDependenciesInjectionInfraestruture(){
        container.registerSingleton<AxiosClient>(InjectionTokenAxiosClient, AxiosClient);
        container.register<ILoginRequest>(InjectionTokenLoginRequest, { useClass: LoginRequest});
        
    }

    private static addDependenciesInjectionPresentation(){
        container.registerSingleton(InjectionTokenLoginController, LoginController);
    }
}