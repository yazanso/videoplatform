import express from "express";
import { authRoutes } from "./routes/auth.routes";
import { feedRoutes } from "./routes/feed.routes";
import { videosRoutes } from "./routes/videos.routes";

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/feed", feedRoutes);
app.use("/api/v1/videos", videosRoutes);

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

export default app;
