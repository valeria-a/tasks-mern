export interface IUser {
    email: string
    password: string
}

export interface ILoginHandlerResult {
    success: boolean
    message?: string
    token?: string
}