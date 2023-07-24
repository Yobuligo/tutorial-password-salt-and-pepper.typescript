"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPassword = void 0;
const Pepper_1 = require("../server/Pepper");
const toPassword = (password, salt) => {
    return hash.sha512().update(`${password}.${salt}.${Pepper_1.PEPPER}`).digest("hex");
};
exports.toPassword = toPassword;
//# sourceMappingURL=toPassword.js.map