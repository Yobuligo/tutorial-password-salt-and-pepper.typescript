import { PEPPER } from "../server/Pepper";

export const toPassword = (password: string, salt: string): string => {
  return hash.sha512().update(`${password}.${salt}.${PEPPER}`).digest("hex");
};
