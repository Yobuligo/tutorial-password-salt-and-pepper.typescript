import { IUser } from "../model/IUser";
export interface IUserDb extends IUser {
    salt: string;
}
