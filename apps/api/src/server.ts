import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.disable("x-powered-by");

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

app.get("/api/v1/health", (_request, response) => {
  response.status(200).json({
    service: "pulsecart-api",
    status: "ok",
  });
});

app.listen(port, () => {
  console.log(`PulseCart API running at http://localhost:${port}`);
});