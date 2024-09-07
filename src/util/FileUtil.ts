export default class FileUtil{

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
}