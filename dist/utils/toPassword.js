"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPassword = void 0;
const hash_js_1 = __importDefault(require("hash.js"));
const Pepper_1 = require("../server/Pepper");
const toPassword = (password, salt) => {
    return hash_js_1.default.sha256().update(`${password}.${salt}.${Pepper_1.PEPPER}`).digest("hex");
};
exports.toPassword = toPassword;
//# sourceMappingURL=toPassword.js.map