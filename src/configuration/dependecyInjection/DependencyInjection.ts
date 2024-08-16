import { container } from "tsyringe";
import { InjectionTokenAlertModal, InjectionTokenAxiosClient, InjectionTokenCepRequest, InjectionTokenLoginRequest, InjectionTokenUseCasePostLoginToUser } from "./InjectionTokens";
import CepRequest from "@/infraestruture/gateway/CepRequest";
import AxiosClient from "@/infraestruture/api/HttpClient";
import ILoginRequest from "@/application/interfaces/ILoginRequest";
import LoginRequest from "@/infraestruture/repository/LoginRequest/LoginRequest";
import PostLoginUser from "@/application/useCases/PostLoginUser/PostLoginUser";
import ICepRequest from "@/application/interfaces/ICepRequest";
import IAlertModal from "@/application/interfaces/IAlertModal";
import AlertModalSweet from "@/infraestruture/alerts/AlertModal";

export default class DependencyInjection {

    public static addDependencyInjectionConfig(){
        this.addDependenciesInjectionInfraestruture();
        this.addDependenciesInjectionApplication();
    }

    private static addDependenciesInjectionApplication(){
        container.register<ICepRequest>(InjectionTokenCepRequest, { useClass: CepRequest });
        container.register(InjectionTokenUseCasePostLoginToUser, PostLoginUser);
        container.register<IAlertModal>(InjectionTokenAlertModal, { useClass: AlertModalSweet })
    }

    private static addDependenciesInjectionInfraestruture(){
        container.registerSingleton<AxiosClient>(InjectionTokenAxiosClient, AxiosClient);
        container.register<ILoginRequest>(InjectionTokenLoginRequest, { useClass: LoginRequest});
    }
}