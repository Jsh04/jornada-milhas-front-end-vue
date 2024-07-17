import Address from '@/common/valueObjects/Address';
import  User  from './User';
import { Genre } from '../enums/EnumGenre';
import { Phone } from '@/common/valueObjects/Phone';
import { Cpf } from '@/common/valueObjects/Cpf';

export default class UserAdmin extends User {

    private readonly codeEmployee: string;

    constructor(name = '', codeEmployee: string, Address: Address, dtBirth: Date, genre: Genre, phone: Phone, cpf:Cpf){
        super(name, Address, dtBirth, genre, phone, cpf);
        this.codeEmployee = codeEmployee;
    }

    public getCodeEmployee(): string {
        return this.codeEmployee;
    }
}