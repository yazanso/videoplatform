import { Router } from "express";

export const videosRoutes = Router();

videosRoutes.post("/upload/init", (_req, res) => {
  res.json({ uploadUrl: "signed-url", key: "video-key" });
});

videosRoutes.post("/upload/complete", (_req, res) => {
  res.status(202).json({ status: "PROCESSING" });
});
