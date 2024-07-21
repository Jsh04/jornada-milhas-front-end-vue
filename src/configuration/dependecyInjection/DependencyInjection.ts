import { container } from "tsyringe";
import { InjectionTokenAxiosClient, InjectionTokenCepRequest, InjectionTokenLoginRequest, InjectionTokenUseCasePostLoginToUser } from "./InjectionTokens";
import CepRequest from "@/infraestruture/gateway/CepRequest";
import AxiosClient from "@/infraestruture/api/HttpClient";
import ILoginRequest from "@/application/interfaces/ILoginRequest";
import LoginRequest from "@/infraestruture/repository/LoginRequest/LoginRequest";
import PostLoginUser from "@/application/useCases/PostLoginUser/PostLoginUser";

export default class DependencyInjection {

    public static addDependencyInjectionConfig(){
        this.addDependenciesInjectionInfraestruture();
        container.register(InjectionTokenUseCasePostLoginToUser, PostLoginUser);
    }

    private static addDependenciesInjectionInfraestruture(){
        container.registerSingleton<AxiosClient>(InjectionTokenAxiosClient, AxiosClient);
        container.register(InjectionTokenCepRequest, { useClass: CepRequest });
        container.register<ILoginRequest>(InjectionTokenLoginRequest, { useClass: LoginRequest});
    }
}