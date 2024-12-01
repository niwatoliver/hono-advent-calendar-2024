import { Hono } from "hono";

const app = new Hono()
  .get("/hello", (c) => {
    return c.text("Hello Hono!");
  })
  .get("/user/sample", (c) => {
    return c.json({ user: { id: "oliver", name: "おりばー" } });
  });

export type AppType = typeof app;
export { app };
