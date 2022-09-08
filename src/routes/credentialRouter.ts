import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { createCredentialSchema } from "../schemas/credentialSchema";
import { validateToken } from "../middlewares/validateToken";
import { createCredencial, getAllCredentials } from "../controllers/credentialController";

const router = express.Router();

router.post(
  "/credentials/create",
  validateToken,
  validateSchemaMiddleware(createCredentialSchema),
  createCredencial
);

router.get(
  "/credentials/getAll",
  validateToken,
  getAllCredentials
);

export default router;