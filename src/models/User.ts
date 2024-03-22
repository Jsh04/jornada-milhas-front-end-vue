import { Genre } from "./enums/EnumGenre";
import { Role } from "./enums/EnumsRole";

export default class User{
    id = 0
    name = ''
    dtBirth = ''
    genre = Genre.NotInfo
    cpf = ''
    phone = ''
    city = ''
    state = ''
    email = ''
    confirmEmail = ''
    password = ''
    confirmPassword = ''
    codeEmployee = ''
    adress = ''
    district = ''
    cep = ''
    userRole = Role.Limited
}