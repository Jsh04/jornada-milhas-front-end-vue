import IReadableUseCase from "@/common/interfaces/useCases/IReadableUseCase";
import PaginationResultResponse from "@/common/results/PaginationResult";
import Destination from "@/domain/entities/Destination";

export default interface IGetDestinies extends IReadableUseCase<Destination> {

    getAllDestinationsBy(): PaginationResultResponse<Destination>
}