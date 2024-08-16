import IError from "../errors/IError";
import IResultBase from "./IResultBase";

export default abstract class ResultBase implements IResultBase{
    public success: boolean = this.Errors.length == 0;
    public errors: readonly IError[] = this.Errors;

    protected _errors: IError[] = [];



    get Errors(){
        return this._errors;
    }
}