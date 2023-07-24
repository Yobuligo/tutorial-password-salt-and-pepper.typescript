import { IUser } from "./IUser";

export interface IUserDb extends IUser {
  salt: string;
}
