export default interface IAlertModal {
    addAlertModalSuccess(title: string, text: string): void;
    addAlertModalError(title: string, text: string): void;
    addAlertModalWarning(title: string, text: string): void;
}