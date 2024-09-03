import IStoreService from "@/application/interfaces/services/IStoreService";
import IGetDestinyById from "@/application/interfaces/useCases/destiny/IGetDestinyById";
import { InjectionTokenDestinyRepository, InjectionTokenStoreDestination } from "@/configuration/constants/InjectionTokens";
import Destination from "@/domain/entities/Destination";
import IDestinyRepository from "@/domain/interfaces/IDestinyRepository";
import { StateDestination } from "@/store/modules/DestinyModule";
import { inject } from "tsyringe";

export default class GetByIdDestinyUseCase implements IGetDestinyById{

    constructor(@inject(InjectionTokenDestinyRepository) private destinyRepository: IDestinyRepository,
@inject(InjectionTokenStoreDestination) private destinyStoreService: IStoreService<StateDestination>){}

    async getDestinyById(id: number): Promise<Destination> {
        const destinations = this.destinyStoreService.getState().Destinys;
        if (destinations.length != 0) {
            const destinyReturn = destinations.find(destiny => destiny.id == id);
        }
            
        

    }
    
}