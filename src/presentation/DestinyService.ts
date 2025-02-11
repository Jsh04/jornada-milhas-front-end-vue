import IGetAllDestinies from "@/application/interfaces/useCases/destiny/IGetDestinies";
import IGetDestinyById from "@/application/interfaces/useCases/destiny/IGetDestinyById";
import { InjectionTokenUseCaseGetAllDestinies, InjectionTokenUseCaseGetDestinyById } from "@/configuration/constants/InjectionTokens";
import Destination from "@/domain/entities/Destination";
import { inject, injectable } from "tsyringe";

@injectable()
export class DestinyService{

    constructor(
        @inject(InjectionTokenUseCaseGetAllDestinies) private getAllDestiniesUseCase: IGetAllDestinies,
        @inject(InjectionTokenUseCaseGetDestinyById) private getDestinyByIdUseCase: IGetDestinyById,
    ){}

    async getAllDestinies(size = 10, page = 1){
        const destinations = await this.getAllDestiniesUseCase.getAllDestinations(size, page);
        return destinations;
    }

    async getDestinyById(id: number): Promise<Destination | undefined>{
        return await this.getDestinyByIdUseCase.getDestinyById(id);
    }

}