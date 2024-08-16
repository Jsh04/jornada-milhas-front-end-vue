import Destination from "@/domain/entities/Destination";
import IDestinyService from "../interfaces/services/IDestinyService";

export default class DestinyService implements IDestinyService{


    getAllDestinies(page = 1, size= 10): Destination[] {
        console.log(page, size);
        return [];
    }
    
}