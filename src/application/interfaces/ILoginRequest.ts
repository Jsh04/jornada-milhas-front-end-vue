import LoginDto from "../DTOs/LoginDto";

export default interface ILoginRequest{
    postCredentialsToLogin(email: string, password: string): Promise<LoginDto>
}