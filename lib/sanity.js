import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "9c5ahvhz", // Sanity panelinden alabilirsin
  dataset: "production",
  apiVersion: "2025-06-10", // bugünün tarihi
  useCdn: true,
});
