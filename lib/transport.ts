import { client, RpcTransport } from "twirpscript";

client.baseURL = "https://fusion-cva6vopela-bq.a.run.app";
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
