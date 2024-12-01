import { app as backend } from "@hono-advent-calendar-2024/backend";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const handleDevOnly = (...args: Parameters<ReturnType<typeof handle>>) => {
  // if (process.env.NODE_ENV === "development") {
  const app = new Hono().basePath("/api").route("/", backend);
  return handle(app)(...args);
  // }
  // return new Response(null, { status: 404 });
};

export const runtime = "nodejs";
export const GET = handleDevOnly;
export const POST = handleDevOnly;
export const PUT = handleDevOnly;
export const PATCH = handleDevOnly;
export const DELETE = handleDevOnly;
