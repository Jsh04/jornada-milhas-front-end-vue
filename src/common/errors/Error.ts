import IError from "./IError";

class Error implements IError{

    message: string;
    code: string;

    constructor(message: string, code: string) {
        this.message = message;
        this.code = code;
    }

    get getMessage(){
        return this.message;
    }

    get getCode(){
        return this.code;
    }
}

export default  Error 