import IError from "../errors/IError";

export default interface IResultBase{
    success: boolean;
    errors: ReadonlyArray<IError>
}