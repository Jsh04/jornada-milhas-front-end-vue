

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

    public static formatNumberInMaskPrice(value: number){
        return this.maskCurrency(value)
    }

    public static returnByteArrayFile(base64Image: string): Blob{
        const splitStringBase64 = base64Image.split(',');
        
        const contentType = splitStringBase64[0].split(":")[1].split(";")[0]
        const stringBase64File = splitStringBase64[1];

        const decodedData:string = atob(stringBase64File);
        const byteNumbers = new Array(decodedData.length);
        for (let i = 0; i < decodedData.length; i++) {
            byteNumbers[i] = decodedData.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const buffer = new ArrayBuffer(byteArray.length);
        const bufferView = new Uint8Array(buffer);
        for (let i = 0; i < byteArray.length; i++) {
            bufferView[i] = byteArray[i];
        }
        return new Blob([buffer], { type: contentType });
    }

    public static MaskPhone(phone: string): string{
        let r = phone.replace(/\D/g, "");
        r = r.replace(/^0/, "");
        if (r.length > 10) {
            r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 5) {
            r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
            r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            r = r.replace(/^(\d*)/, "($1");
        }
        return r;
    }
}

