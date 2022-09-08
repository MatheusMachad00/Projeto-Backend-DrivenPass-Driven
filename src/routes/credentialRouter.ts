import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { createCredentialSchema } from "../schemas/credentialSchema";

const router = express.Router();

router.post(
  "/credentials/create",
  validateSchemaMiddleware(createCredentialSchema),
  
);

export default router;