import User from "@/domain/entities/users/User"

export default interface LoginDto {
    token: string
    user: User
}