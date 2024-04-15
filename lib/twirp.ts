import { ClientConfiguration } from "twirpscript"

export const config: ClientConfiguration = {
  baseURL: "https://fusion-cva6vopela-bq.a.run.app",
  prefix: "/api/v1",
  headers: {
    Authorization: "Bearer token",
  },
}
