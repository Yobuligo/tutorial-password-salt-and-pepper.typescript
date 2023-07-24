import hash from "hash.js";
import { PEPPER } from "../server/Pepper";

export const toPassword = (password: string, salt: string): string => {
  return hash.sha256().update(`${password}.${salt}.${PEPPER}`).digest("hex");
};
