export default class FormatMoney{
    public static FormatMoney(value: string): string{
        const onlyDigits = value
        .split("")
        .filter(s => /\d/.test(s))
        .join("")
        .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        return this.maskCurrency(parseFloat(digitsFloat))
    }

    private static maskCurrency(valueInput: number, locale = 'pt-BR', currency = 'BRL'){
        return Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
          }).format(valueInput);
    }

    public static formatNumberInMaskPrice(value: number){
        return this.maskCurrency(value)
    }
}