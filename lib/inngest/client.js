import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Mentora",
  name: "Mentora",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
