import IAlertModal from "@/application/interfaces/alert/IAlertModal";
import IStoreService from "@/application/interfaces/services/IStoreService";
import IGetDestinyById from "@/application/interfaces/useCases/destiny/IGetDestinyById";
import { InjectionTokenAlertModal, InjectionTokenDestinyRepository, InjectionTokenStoreDestination } from "@/configuration/constants/InjectionTokens";
import Destination from "@/domain/entities/Destination";
import IDestinyRepository from "@/domain/interfaces/IDestinyRepository";
import { StateDestination } from "@/store/modules/DestinyModule";
import { inject, injectable } from "tsyringe";

@injectable()
export default class GetByIdDestinyUseCase implements IGetDestinyById{

    constructor(
        @inject(InjectionTokenDestinyRepository) private destinyRepository: IDestinyRepository,
        @inject(InjectionTokenStoreDestination) private destinyStoreService: IStoreService<StateDestination>,
        @inject(InjectionTokenAlertModal) private alertModal: IAlertModal
    ){}

    async getDestinyById(id: number): Promise<Destination | undefined> {
        const destinations = this.destinyStoreService.getState().Destinys;

        if (destinations.length == 0)
            return await this.returnDestinyFromApi(id);
        
        const destinyReturnOfStore = this.returnDestinyInStore(id, destinations);

        if (!destinyReturnOfStore) 
            return await this.returnDestinyFromApi(id);

        return destinyReturnOfStore
        
    }

    private returnDestinyInStore(id: number, destinies: Destination[]): Destination | undefined{
        const destinyReturn = destinies.find(destiny => destiny.id == id);

        if (!destinyReturn) 
            return undefined;
        
        return destinyReturn;
    }

    private async returnDestinyFromApi(id: number){
        const destinyResponse = await this.destinyRepository.getDestinyById(id);
        if (!destinyResponse.success) 
            this.alertModal.addAlertModalError("Erro ao retornar destino",destinyResponse.errors[0].message);

        return destinyResponse.Value;
    }
    
}