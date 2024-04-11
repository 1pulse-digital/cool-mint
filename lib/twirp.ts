import { ClientConfiguration } from "twirpscript"

export const config: ClientConfiguration = {
  baseURL: "http://localhost:8080",
  prefix: "/api/v1",
  headers: {
    Authorization: "Bearer token",
  },
}
