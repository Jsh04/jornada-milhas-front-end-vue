
import { email, helpers, required, maxLength, minLength, sameAs } from "@vuelidate/validators";

export default class ValidatorFluentWithVuelidate {

    private listValidators = [] as object[];

    public static createBuild(){
        return new ValidatorFluentWithVuelidate()
    }

    public addRequiredWithMessage(message: string){
        this.listValidators.push({ required: helpers.withMessage(message, required) });
        return this;
    }

    public addEmailWithMessage(message: string){
        this.listValidators.push({ email: helpers.withMessage(message, email)})
        return this;
    }

    public addMinLength(message: string, minLengthValue: number){
        this.listValidators.push({minLength: helpers.withMessage("O campo deverá ter no mínimo 8 caracteres", minLength(minLengthValue))})
        return this;
    }

    public addSameAs(message: string, valueToSame: object){
        this.listValidators.push({sameAsEmail: helpers.withMessage(message, sameAs(valueToSame))})
        return this;
    }

    public build(){
        const objToReturn = {}

        this.listValidators.forEach(obj => {
            Object.assign(objToReturn, obj);
        })
        
        return objToReturn;
    }

}