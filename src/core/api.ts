import axios from "axios";
import { config } from "./config.ts";

export const api = axios.create({
  headers: {
    "x-api-key": config.apiKey,
  },
});
