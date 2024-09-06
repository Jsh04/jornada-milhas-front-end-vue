

import Destination from "@/domain/entities/Destination";

export default interface IGetAllDestinies  {

    getAllDestinations(size: number, page: number): Promise<Destination[]>;
}