import { Router } from "express";

export const feedRoutes = Router();

feedRoutes.get("/for-you", (_req, res) => {
  res.json({ items: [], cursor: null, source: "ranking-service" });
});

feedRoutes.get("/following", (_req, res) => {
  res.json({ items: [], cursor: null, source: "following-graph" });
});
