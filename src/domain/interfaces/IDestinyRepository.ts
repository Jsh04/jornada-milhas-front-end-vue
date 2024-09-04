import PaginationResultResponse from "@/common/results/PaginationResult";
import Destination from "../entities/Destination";
import { Result, ResultValue } from "@/common/results/Result";

export default interface IDestinyRepository {
    getAllDestinies(page: number, size: number): Promise<PaginationResultResponse<Destination>>;
    deleteDestinyById(destinyId: number): Promise<Result>
    getDestinyById(id: number): Promise<ResultValue<Destination>>;
}