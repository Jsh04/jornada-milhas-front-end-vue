import IStoreService from "@/application/interfaces/services/IStoreService";
import IGetDestinies from "@/application/interfaces/useCases/destiny/IGetDestinies";
import PaginationResultResponse from "@/common/results/PaginationResult";
import { ResultValue } from "@/common/results/Result";
import { InjectionTokenDestinyRepository, InjectionTokenStoreDestination } from "@/configuration/constants/InjectionTokens";
import Destination from "@/domain/entities/Destination";
import IDestinyRepository from "@/domain/interfaces/IDestinyRepository";
import { StateDestination } from "@/store/modules/DestinyModule";
import { LIST_DESTINYS } from "@/store/mutations/DestinysMutations";
import { inject, injectable } from "tsyringe";

@injectable()
export default class GetDestinies implements IGetDestinies{

    constructor(
        @inject(InjectionTokenDestinyRepository) private readonly destinyRepository: IDestinyRepository,
        @inject(InjectionTokenStoreDestination) private storeService: IStoreService<StateDestination>
        ){}

    getAllDestinationsBy(): PaginationResultResponse<Destination> {
        throw new Error("Method not implemented.");
    }

    async getAll(page = 1, size = 10): Promise<Destination[]> {
        const listDestination = this.storeService.getState().Destinys;

        if (listDestination.length != 0) 
            return listDestination

        const paginationResult = await this.destinyRepository.getAllDestinies(page, size);

        const listDestiniesFromApi = paginationResult.data;
        this.storeService.commit(LIST_DESTINYS, listDestiniesFromApi)

        return listDestiniesFromApi;
    }
    getById(id: number): ResultValue<Destination> {
        throw new Error("Method not implemented.");
    }

}