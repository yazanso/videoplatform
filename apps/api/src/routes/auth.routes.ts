import { Router } from "express";

export const authRoutes = Router();

authRoutes.post("/login", (_req, res) => {
  res.json({ accessToken: "jwt", refreshToken: "opaque" });
});
