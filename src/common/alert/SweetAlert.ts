import { ButtonList } from "sweetalert/typings/modules/options/buttons";

export default class SweetAlert{
    public static showAlertWithSuccess(title: string, text: string, buttons:  ButtonList | (string | boolean)[] | undefined){
        swal({
            title,
            text,
            icon: "success"
        })
    }
    public static showAlertWithError(title: string, text: string, buttons:  ButtonList | (string | boolean)[] | undefined){
        swal({
            title,
            text,
            icon: "error"
        })
    }
}