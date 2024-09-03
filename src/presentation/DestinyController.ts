import IGetAllDestinies from "@/application/interfaces/useCases/destiny/IGetDestinies";
import { InjectionTokenUseCaseGetAllDestinies } from "@/configuration/constants/InjectionTokens";
import Destination from "@/domain/entities/Destination";
import { inject, injectable } from "tsyringe";

@injectable()
export class DestinyController{

    constructor(@inject(InjectionTokenUseCaseGetAllDestinies) 
    private getAllDestiniesUseCase: IGetAllDestinies,
    private getDestinyById: IGetDestinyById
){}

    async getAllDestinies(size = 10, page = 1){
        const destinations = await this.getAllDestiniesUseCase.getAllDestinations(size, page);
        return destinations;
    }

    async getDestinyById(id: number): Promise<Destination>{
        
    }

    async deleteDestinyById(id: number){

    }
}