export default class Util {

    public static FormatMoney(value: string): string{
        const onlyDigits = value
        .split("")
        .filter(s => /\d/.test(s))
        .join("")
        .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
        return Util.maskCurrency(parseFloat(digitsFloat))
    }

    private static maskCurrency(valueInput: number, locale = 'pt-BR', currency = 'BRL'){
        return Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
          }).format(valueInput);
    }
}

