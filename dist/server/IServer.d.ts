import { ICredentials } from "../types/ICredentials";
export interface IServer {
    login(credentials: ICredentials): void;
    register(credentials: ICredentials): void;
}
