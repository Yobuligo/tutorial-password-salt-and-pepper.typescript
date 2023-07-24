import { IServer } from "../server/IServer";
import { ICredentials } from "../types/ICredentials";
import { IClient } from "./IClient";

export class Client implements IClient {
  constructor(
    private readonly server: IServer,
    private readonly username: string,
    private readonly password: string
  ) {}

  async login(): Promise<void> {
    try {
      const user = await this.server.login(this.toCredentials());
      console.log("User was logged in");
    } catch (error) {
      console.log(error);
    }
  }

  async register(): Promise<void> {
    try {
      await this.server.register(this.toCredentials());
      console.log("User was registered");
    } catch (error) {
      console.log(error);
    }
  }

  private toCredentials(): ICredentials {
    return { username: this.username, password: this.password };
  }
}
