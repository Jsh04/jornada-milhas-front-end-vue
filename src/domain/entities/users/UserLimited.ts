import Address from '@/common/valueObjects/Address';
import  User  from './User';
import { Phone } from '@/common/valueObjects/Phone';
import { Cpf } from '@/common/valueObjects/Cpf';
import { EnumGenre } from '@/domain/enums/EnumGenre';

export default class UserLimited extends User {
    // Add any additional properties or methods specific to UserLimited here

    constructor(name = '', Address: Address, dtBirth: Date, genre: EnumGenre, phone: Phone, cpf:Cpf){
        super(name, Address, dtBirth, genre, phone, cpf);
    }


    // Add any additional methods specific to UserLimited here
}