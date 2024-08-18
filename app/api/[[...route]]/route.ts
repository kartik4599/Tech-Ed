import { Hono } from "hono";
import { handle } from "hono/vercel";
import Course from "./routes/courses.routes";
import Payment from "./routes/payment.routes";
import User from "./routes/user.routes";

export const runtime = "edge";
const app = new Hono().basePath("/api");

app.route("/", User);
app.route("/", Course);
app.route("/", Payment);

export const GET = handle(app);
export const POST = handle(app);
