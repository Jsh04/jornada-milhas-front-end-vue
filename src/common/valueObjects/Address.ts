export default class Address {
    private readonly street: string;
    private readonly city: string;

    private readonly state: string;
    private readonly cep: string;

    constructor(street: string, city: string, state: string, zipCode: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.cep = zipCode;
    }
}