export default class Util {

    public static FormatMoney(value: number, currency: string, localeString: string): string{
        const options = { style: "currency", currency }
        return value.toLocaleString(localeString, options)
    }
}