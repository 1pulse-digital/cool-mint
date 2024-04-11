import { client, RpcTransport } from "twirpscript";

client.baseURL = "http://localhost:8080";
client.prefix = "/api/v1";
export const transport = (tags: string[]): RpcTransport => {
  return (url, opts) => {
    return fetch(url, {
      ...opts,
      next: {
        tags,
      },
    });
  };
};
