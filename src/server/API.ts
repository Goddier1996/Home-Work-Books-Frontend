import { Config } from "./config";

// connect to function from nodejs to control database
export const API = {
  BOOK: {
    GET: `${Config.API.BASE}/api/books`,
    ADD: `${Config.API.BASE}/api/books/add`,
  }
};