import { client, RpcTransport } from "twirpscript"

export const authHeaders = (token?: string): Record<string, string> => {
  if (!token) {
    return {}
  }

  return { Authorization: `Bearer ${token}` }
}

export const transport = (tags: string[]): RpcTransport => {
  return (url, opts) => {
    return fetch(url, {
      ...opts,
      next: {
        tags,
      },
    })
  }
}

export const initTransport = () => {
  client.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"
  client.prefix = "/api/v1"
}
