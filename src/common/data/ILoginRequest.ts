import LoginDto from "@/infraestruture/DTOs/LoginDto";

export default interface ILoginRequest{
    postUserToLogin(email: string, password: string): Promise<LoginDto>
}