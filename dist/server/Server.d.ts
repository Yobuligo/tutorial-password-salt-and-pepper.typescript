import { IUser } from "../model/IUser";
import { ICredentials } from "../types/ICredentials";
import { IServer } from "./IServer";
export declare class Server implements IServer {
    private users;
    login(credentials: ICredentials): Promise<IUser>;
    register(credentials: ICredentials): Promise<IUser>;
    private checkUserExists;
    private createUser;
    private userExist;
}
