import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";

const router = express.Router();

router.post(
  "/credentials/create",
  validateToken,

);

export default router;