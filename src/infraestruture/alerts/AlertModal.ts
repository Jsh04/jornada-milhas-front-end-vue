import IAlertModal from "@/application/interfaces/alert/IAlertModal";
import { injectable } from "tsyringe";
import swal from "sweetalert";
@injectable()
export default class AlertModalSweet implements IAlertModal {
    addAlertModalSuccess(title: string, text: string): void {
        swal({
            text,
            title,
            icon: "success"
        })
    }
    addAlertModalError(title: string, text: string): void {
        swal({
            text,
            title,
            icon: "error"
        })
    }
    addAlertModalWarning(title: string, text: string): void {
        swal({
            text,
            title,
            icon: "warning"
        })
    }

}