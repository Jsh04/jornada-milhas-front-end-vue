import User from "@/models/User"

export default interface LoginResponseDto {
    token: string
    User: User
}