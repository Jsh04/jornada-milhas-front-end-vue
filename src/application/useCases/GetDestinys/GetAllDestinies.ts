import IStoreService from "@/application/interfaces/services/IStoreService";
import IGetAllDestinies from "@/application/interfaces/useCases/destiny/IGetDestinies";
import { InjectionTokenDestinyRepository, InjectionTokenStoreDestination } from "@/configuration/constants/InjectionTokens";
import Destination from "@/domain/entities/Destination";
import IDestinyRepository from "@/domain/interfaces/IDestinyRepository";
import { StateDestination } from "@/store/modules/DestinyModule";
import { LIST_DESTINYS } from "@/store/mutations/DestinysMutations";
import { inject, injectable } from "tsyringe";

@injectable()
export default class GetAllDestinies implements IGetAllDestinies{

    constructor(
        @inject(InjectionTokenDestinyRepository) private readonly destinyRepository: IDestinyRepository,
        @inject(InjectionTokenStoreDestination) private storeService: IStoreService<StateDestination>
        ){}

    async getAllDestinations(size: number, page: number): Promise<Destination[]> {
        const listDestination = this.storeService.getState().Destinys;

        if (listDestination.length != 0) 
            return listDestination

        const paginationResult = await this.destinyRepository.getAllDestinies(page, size);

        const listDestiniesFromApi = paginationResult.data;
        this.storeService.commit(LIST_DESTINYS, listDestiniesFromApi)

        return listDestiniesFromApi;
    }

}