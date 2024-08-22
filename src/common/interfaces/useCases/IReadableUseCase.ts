import PaginationResultResponse from "@/common/results/PaginationResult";
import { ResultValue } from "@/common/results/Result";

export default interface IReadableUseCase<TValue> {
    getAll(page: number, size: number ): Promise<TValue[]>;
    getById(id: number): ResultValue<TValue>;
}