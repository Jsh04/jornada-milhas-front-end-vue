import { Genre } from "./enums/EnumGenre";
import { Role } from "./enums/EnumsRole";

export default class User{
    Name = ''
    DtBirth = ''
    Genre = Genre.NotInfo
    Cpf = ''
    Phone = ''
    City = ''
    State = ''
    Email = ''
    ConfirmEmail = ''
    Password = ''
    ConfirmPassword = ''
    CodeEmployee = ''
    Adress = ''
    District = ''
    Cep = ''
    UserRole = Role.Limited
}