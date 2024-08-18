import IError from "../errors/IError";
import {ResultBase, ResultBaseValue} from "./ResultBase";

class Result extends ResultBase {

    constructor(error?: IError | IError[]){
        super();
        this.addErrorsInList(error);

    }
    
    private addErrorsInList(error?: IError | IError[]){
        if (error) 
            if (Array.isArray(error)) 
                this._errors.push(...error); 
             else 
                this._errors.push(error);
            
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

class ResultValue<TValue> extends ResultBaseValue<TValue>{

    constructor(value?: TValue, errors?: IError[]) {
        super(value);

        if (errors) {
            this._errors.push(...errors); 
        }
    }

    public static Ok<TValue>(value: TValue){  
        return new ResultValue<TValue>(value);
    }

    public static FailWithError<TValue>(error: IError){
        return new ResultValue<TValue>(undefined, [error]);
    }

    public static FailWithErrors<TValue>(errors: IError[]){
        return new ResultValue<TValue>(undefined, errors);
    }
}

export { Result, ResultValue };