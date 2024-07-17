import Address from '@/common/valueObjects/Address';
import  User  from './User';
import { Genre } from '../enums/EnumGenre';
import { Phone } from '@/common/valueObjects/Phone';
import { Cpf } from '@/common/valueObjects/Cpf';

export default class UserLimited extends User {
    // Add any additional properties or methods specific to UserLimited here

    constructor(name = '', Address: Address, dtBirth: Date, genre: Genre, phone: Phone, cpf:Cpf){
        super(name, Address, dtBirth, genre, phone, cpf);
    }


    // Add any additional methods specific to UserLimited here
}