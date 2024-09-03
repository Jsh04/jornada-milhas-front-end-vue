import Destination from "@/domain/entities/Destination";

export default interface IGetDestinyById{
    getDestinyById(id: number): Promise<Destination>;
}