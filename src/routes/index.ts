import { Router } from 'express';

import authRouter from "./authRouter"
import credentialRouter from "./credentialRouter"
import safeNotesRouter from "./safeNotesRouter"

const router = Router();

router.use(authRouter);
router.use(credentialRouter);
router.use(safeNotesRouter);


export default router;