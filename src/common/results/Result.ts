import IError from "../errors/IError";
import ResultBase from "./ResultBase";

export default class Result extends ResultBase {

    constructor(error?: IError | IError[]){
        super();
        this.addErrorsInList(error);

    }
    private addErrorsInList(error?: IError | IError[]){
        if (error) 
            if (Array.isArray(error)) {
                this._errors.push(...error); 
            } else {
                this._errors.push(error);
            }
    }

    public static Ok(){  
        return new Result();
    }
    public static FailWithError(error: IError){
        return new Result(error);
    }

    public static FailWithErrors(errors: IError[]){
        return new Result(errors);
    }

}