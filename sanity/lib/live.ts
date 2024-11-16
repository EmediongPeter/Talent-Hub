import "server-only";

import { defineLive } from "next-sanity";
import { client } from "./client";

const token = process.env.SANITY_API_READ_TOKEN

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  }),
  serverToken: token,
  browserToken: token
});
