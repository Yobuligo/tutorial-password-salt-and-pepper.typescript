import hash from "hash.js";
import { IUser } from "../model/IUser";
import { IUserDb } from "../model/IUserDb";
import { ICredentials } from "../types/ICredentials";
import { toPassword } from "./../utils/toPassword";
import { IServer } from "./IServer";

export class Server implements IServer {
  private users = new Map<string, IUserDb>();

  login(credentials: ICredentials): Promise<IUser> {
    return new Promise((resolve, reject) => {
      const userDb = this.users.get(credentials.username);
      if (!userDb) {
        return reject("Username or password incorrect");
      }

      const password = toPassword(credentials.password, userDb.salt);
      if (password !== userDb.password) {
        return reject("Username or password incorrect");
      }

      const user: IUser = { ...userDb };
      resolve(user);
    });
  }

  register(credentials: ICredentials): Promise<IUser> {
    return new Promise((resolve, reject) => {
      try {
        this.checkUserExists(credentials.username);
      } catch (error) {
        reject(error);
      }

      const userDb = this.createUser(credentials);
      this.users.set(credentials.username, userDb);
      const user: IUser = { ...userDb };
      resolve(user);
    });
  }

  private checkUserExists(username: string) {
    if (this.userExist(username)) {
      throw new Error("User already exist");
    }
  }

  private createUser(credentials: ICredentials): IUserDb {
    const salt = hash.sha256().update(Math.random()).digest("hex");
    const password = toPassword(credentials.password, salt);
    return { username: credentials.username, password, salt };
  }

  private userExist(username: string): boolean {
    return this.users.get(username) !== undefined;
  }
}
