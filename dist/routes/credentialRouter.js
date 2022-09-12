"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateSchema_1 = require("../middlewares/validateSchema");
const credentialSchema_1 = require("../schemas/credentialSchema");
const validateToken_1 = require("../middlewares/validateToken");
const credentialController_1 = require("../controllers/credentialController");
const router = express_1.default.Router();
router.post("/credentials/create", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(credentialSchema_1.createCredentialSchema), credentialController_1.createCredencial);
router.get("/credentials/getAll", validateToken_1.validateToken, credentialController_1.getAllCredentials);
router.get("/credentials/getById/:id", validateToken_1.validateToken, credentialController_1.getById);
router.delete("/credentials/delete/:id", validateToken_1.validateToken, credentialController_1.deleteCredential);
exports.default = router;
