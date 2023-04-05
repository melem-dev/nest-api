export interface IUser{
    readonly id: string;
    readonly username: string;
    readonly email: string;
    readonly passwordHash: string;

    readonly active: boolean;
    readonly verified: boolean;

    readonly createdAt: Date;
    readonly updatedAt: Date;

    readonly createdBy: string;
    readonly updatedBy: string;
}