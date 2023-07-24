"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const hash_js_1 = __importDefault(require("hash.js"));
const toPassword_1 = require("./../utils/toPassword");
class Server {
    constructor() {
        this.users = new Map();
    }
    login(credentials) {
        return new Promise((resolve, reject) => {
            const userDb = this.users.get(credentials.username);
            if (!userDb) {
                return reject("Username or password incorrect");
            }
            const password = (0, toPassword_1.toPassword)(credentials.password, userDb.salt);
            if (password !== userDb.password) {
                return reject("Username or password incorrect");
            }
            const user = Object.assign({}, userDb);
            resolve(user);
        });
    }
    register(credentials) {
        return new Promise((resolve, reject) => {
            try {
                this.checkUserExists(credentials.username);
            }
            catch (error) {
                reject(error);
            }
            const userDb = this.createUser(credentials);
            this.users.set(credentials.username, userDb);
            const user = Object.assign({}, userDb);
            resolve(user);
        });
    }
    checkUserExists(username) {
        if (this.userExist(username)) {
            throw new Error("User already exist");
        }
    }
    createUser(credentials) {
        const salt = hash_js_1.default.sha256().update(Math.random()).digest("hex");
        const password = (0, toPassword_1.toPassword)(credentials.password, salt);
        return { username: credentials.username, password, salt };
    }
    userExist(username) {
        return this.users.get(username) !== undefined;
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map