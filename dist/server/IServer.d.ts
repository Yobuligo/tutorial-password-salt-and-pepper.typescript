import { IUser } from "../model/IUser";
import { ICredentials } from "../types/ICredentials";
export interface IServer {
    login(credentials: ICredentials): Promise<IUser>;
    register(credentials: ICredentials): Promise<IUser>;
}
