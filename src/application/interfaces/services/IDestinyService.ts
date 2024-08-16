import Destination from "@/domain/entities/Destination";

export default interface IDestinyService{
    getAllDestinies(page: number, size: number): Destination[]
}