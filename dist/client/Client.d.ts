import { IServer } from "../server/IServer";
import { IClient } from "./IClient";
export declare class Client implements IClient {
    private readonly server;
    private readonly username;
    private readonly password;
    constructor(server: IServer, username: string, password: string);
    login(): Promise<void>;
    register(): Promise<void>;
    private toCredentials;
}
