"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateSchema_1 = require("../middlewares/validateSchema");
const validateToken_1 = require("../middlewares/validateToken");
const creditCardSchema_1 = require("../schemas/creditCardSchema");
const creditCardController = __importStar(require("../controllers/creditCardController"));
const router = express_1.default.Router();
router.post("/card/create", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(creditCardSchema_1.createCreditCardSchema), creditCardController.createCreditCard);
router.get("/card/getAll", validateToken_1.validateToken, creditCardController.getAllCreditCards);
router.get("/card/getById/:id", validateToken_1.validateToken, creditCardController.getCreditCardById);
router.delete("/card/delete/:id", validateToken_1.validateToken, creditCardController.deleteCreditCard);
exports.default = router;
