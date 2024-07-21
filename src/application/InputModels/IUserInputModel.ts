import { EnumGenre } from "@/domain/enums/EnumGenre";

export default interface IUserInputModel
{
    name: string,
    codeEmployee: string,
    dtBirth: Date,
    genre: EnumGenre,
    cpf: string,
    phone: string,
    cep: string,
    city: string,
    state: string,
    address: string,
    district: string,
    email: string,
    confirmEmail: string,
    password: string,
    confirmPassword: string,

}
