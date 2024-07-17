export class Phone {
    private readonly number: string;
    private static REGEX_PHONE = /^(\([1-9]{2}\)\s)?(?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/
    
    private constructor(number: string) {
        this.number = number;
    }

    private static validationPhone(number: string): string {

        const numberFormatted = this.formatFields(number);

        if (number == null ) throw new Error(PhoneErrors.PHONE_REQUIRED);
        if (number.length > 15) throw new Error(PhoneErrors.PHONE_TOO_LONG);
        if (this.REGEX_PHONE.test(number)) throw new Error(PhoneErrors.PHONE_INVALID);
        return numberFormatted;
    }

    public static create(number: string): Phone {
        const numberCreated = this.validationPhone(number);
        return new Phone(numberCreated);
    }

    public get getNumber(): string {
        return this.number;
    }

    private static formatFields(number: string): string {
        return number.trim()
            .replace("(", "")
            .replace(")", "")
            .replace("-", "")
            .replace(" ", "");
    }
}

class PhoneErrors{
    public static readonly PHONE_REQUIRED = 'Phone is required';
    public static readonly PHONE_TOO_LONG = 'Phone is too long';
    public static readonly PHONE_INVALID = 'Phone is invalid';
}