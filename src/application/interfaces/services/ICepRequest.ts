import CepDto from "@/application/DTOs/CepDto";


export default interface CepRequest{
    getAddressByCep(cep: string): Promise<CepDto>;
}