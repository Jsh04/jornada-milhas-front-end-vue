import User from "@/domain/users/entities/User"

export default interface LoginDto {
    token: string
    user: User
}