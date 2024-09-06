import IError from "../errors/IError";
import IResultBase from "./IResultBase";

abstract class ResultBase implements IResultBase{
    public success: boolean = this.Errors.length == 0;
    public errors: readonly IError[] = this.Errors;

    protected _errors: IError[] = [];

    get Errors(){
        return this._errors;
    }
}

abstract class ResultBaseValue<TValue> extends ResultBase{
    public value: TValue  | undefined = this.Value;

    public valueOrDefault: TValue | null = this.ValueOrNull

    protected _value: TValue  | undefined;

    constructor(value?: TValue) {
        super();
        this._value = value
    }

    get ValueOrNull(){
        if (this._value == undefined) {
            return null;
        }
        return this._value;
    }

    get Value(){
        return this._value;
    }
}

export { ResultBase, ResultBaseValue }