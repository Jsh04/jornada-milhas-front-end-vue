import Address from "@/common/valueObjects/Address";
import { Genre } from "../enums/EnumGenre";
import { Phone } from "@/common/valueObjects/Phone";
import { Cpf } from "@/common/valueObjects/Cpf";

export default abstract class User{
    protected readonly id: number = 0;
    protected name: string;
    protected dtBirth: Date;
    protected genre: Genre;
    protected phone: Phone
    protected cpf: Cpf;
    protected email = ''
    protected confirmEmail = ''
    protected password = '' 
    protected confirmPassword = ''
    protected address: Address;

    constructor(name = '', Address: Address, 
    dtBirth: Date, 
    genre: Genre, 
    phone: Phone, 
    cpf: Cpf){
        this.name = name;
        this.address = Address;
        this.dtBirth = dtBirth;
        this.genre = genre;
        this.phone = phone;
        this.cpf = cpf;
    }
}