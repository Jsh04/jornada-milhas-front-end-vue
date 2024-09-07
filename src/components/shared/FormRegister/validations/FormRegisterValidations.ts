import IUserInputModel from "@/application/InputModels/IUserInputModel"
import { greaterThan18 } from "@/common/validations/ValidationBirthDate"
import { validateCpf } from "@/common/validations/ValidationCPF"
import { validatePhone } from "@/common/validations/ValidationPhone"
import ValidatorFluentWithVuelidate from "@/common/validations/ValidationsVuelidate"
import { email, helpers, minLength, required, sameAs } from "@vuelidate/validators"


export default (isAdmin: boolean, userInputModel: IUserInputModel) =>  {
    return {
    name: ValidatorFluentWithVuelidate
    .createBuild()
    .addRequiredWithMessage("O campo deverá ser obrigatório")
    .build(),

    email: ValidatorFluentWithVuelidate
    .createBuild()
    .addRequiredWithMessage("O campo deverá ser obrigatório")
    .addEmailWithMessage("O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com")
    .build(),
    codeEmployee: isAdmin
        ? ValidatorFluentWithVuelidate.createBuild()
        .addRequiredWithMessage("O campo deverá ser obrigatório")
        .addMinLength("O campo deverá ter no mínimo 8 caracteres", 8)
        .build() : {},

    confirmEmail: {
        email: helpers.withMessage(
            "O campo deverá seguir o sequinte exemplo XXXXX@XXXX.com",
            email
        ),
        required: helpers.withMessage(
            "O campo deverá ser obrigatório",
            required
        ),
        sameAsEmail: helpers.withMessage(
            "O email deverá ser igual ao email digitado anteriormente",
            sameAs(userInputModel.email)
        ),
    },
    confirmPassword: {
        required: helpers.withMessage(
            "O campo deverá ser obrigatório",
            required
        ),
        sameAsPassword: helpers.withMessage(
            "O senha deverá ser a mesma digitada anteriormente",
            sameAs(userInputModel.password)
        ),
    },
    password: {

        required: helpers.withMessage(
            "O campo não poderá ser nulo",
            required
        ),
    },
    cpf: {
        required: helpers.withMessage(
            "O campo deverá ser obrigatório",
            required
        ),
        validatecpf: helpers.withMessage(
            "cpf inválido",
            validateCpf
        ),
    },
    dtBirth: {
        required: helpers.withMessage(
            "O campo não poderá ser nulo",
            required
        ),
        greaterThan18: helpers.withMessage(
            "Deverá ser maior que 18 anos para se cadastrar",
            greaterThan18
        ),
    },
    phone: {
        required: helpers.withMessage(
            "O campo não poderá ser nulo",
            required
        ),
        validatephone: helpers.withMessage(
            "Número inválido",
            validatePhone
        ),
    },
    city: {
        required: helpers.withMessage(
            "O campo não poderá ser nulo",
            required
        ),
    },
    state: {
        required: helpers.withMessage(
            "O campo não poderá ser nulo",
            required
        ),
    },
    adress: isAdmin
        ? {
              required: helpers.withMessage(
                  "O campo não poderá ser nulo",
                  required
              ),
          }
        : {},
    district: isAdmin
        ? {
              required: helpers.withMessage(
                  "O campo não poderá ser nulo",
                  required
              ),
          }
        : {},
    cep: isAdmin
        ? {
              required: helpers.withMessage(
                  "O campo não poderá ser nulo",
                  required
              ),
              minLength: helpers.withMessage(
                  "O campo de CEP deverá ter no mínimo 8 caracteres",
                  minLength(8)
              ),
          }
        : {},
    }
}