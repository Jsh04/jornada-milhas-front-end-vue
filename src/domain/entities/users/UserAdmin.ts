import Address from '@/common/valueObjects/Address';
import  User  from './User';

import { Phone } from '@/common/valueObjects/Phone';
import { Cpf } from '@/common/valueObjects/Cpf';
import { EnumGenre } from '@/domain/enums/EnumGenre';

export default class UserAdmin extends User {

    private readonly codeEmployee: string;

    constructor(name = '', codeEmployee: string, Address: Address, dtBirth: Date, genre: EnumGenre, phone: Phone, cpf:Cpf){
        super(name, Address, dtBirth, genre, phone, cpf);
        this.codeEmployee = codeEmployee;
    }

    public getCodeEmployee(): string {
        return this.codeEmployee;
    }
}