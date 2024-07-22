export default interface PaginationResultResponse<TData>{
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    data: TData[]
}