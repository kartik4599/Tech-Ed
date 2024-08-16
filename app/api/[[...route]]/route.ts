import { Hono } from "hono";
import { handle } from "hono/vercel";
import User from "./routes/user.routes";

export const runtime = "edge";
const app = new Hono().basePath("/api");

app.route("/", User);

export const GET = handle(app);
export const POST = handle(app);
