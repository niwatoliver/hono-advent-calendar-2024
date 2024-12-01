import { hc } from "hono/client";
import type { AppType } from "@hono-advent-calendar-2024/backend";
import { getBaseURL } from "@/app/lib/baseUrl";

export const client = hc<AppType>(`${getBaseURL()}/api`);
