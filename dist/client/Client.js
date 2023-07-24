"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(server, username, password) {
        this.server = server;
        this.username = username;
        this.password = password;
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.server.login(this.toCredentials());
                console.log("User was logged in");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.server.register(this.toCredentials());
                console.log("User was registered");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    toCredentials() {
        return { username: this.username, password: this.password };
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map