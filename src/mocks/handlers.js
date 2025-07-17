import { http } from "msw";

export const handlers = [
  http.get("/api/todos", () => {
    return Response.json([
      { id: "1", text: "Learn Zustand" },
      { id: "2", text: "Use RTK" },
    ]);
  }),
];
