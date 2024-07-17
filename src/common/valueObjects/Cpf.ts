

export class Cpf {
    private readonly number: string;

    private constructor(value: string) {
        this.number = value;
    }

    private static isValid(value: string): boolean {

        const valueFormated = this.formatCpf(value);
        return this.validateCpf(valueFormated);
    }

    private static formatCpf(value: string): string {

        const rgx = new RegExp(/\D/g);
        return rgx.test(value) ? value.replace(rgx, "") : value;
    }

    private static validateCpf(number: string){
        let soma = 0;
        let i;
        let resto;

        if (number == "00000000000") return false;
        for (i = 1; i <= 9; i++)
        soma = soma + parseInt(number.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(number.substring(9, 10))) return false;

        soma = 0;
        for (i = 1; i <= 10; i++)
        soma = soma + parseInt(number.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(number.substring(10, 11))) return false;
        return true;
    }

    public static create(value: string): Cpf {

        if (!value) 
            throw new Error(CpfErrors.CPF_REQUIRED);

        if (!this.isValid(value)) 
            throw new Error(CpfErrors.INVALID_CPF);

        return new Cpf(value);
    
    }
}

class CpfErrors{
    public static readonly INVALID_CPF = 'Número de CPF inválido';
    public static readonly CPF_REQUIRED = 'Número de CPF é obrigatório';
}