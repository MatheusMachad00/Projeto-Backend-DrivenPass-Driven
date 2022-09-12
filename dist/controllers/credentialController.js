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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCredential = exports.getById = exports.getAllCredentials = exports.createCredencial = void 0;
const credentialService = __importStar(require("../services/credentialService"));
function createCredencial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { verifiedToken } = res.locals;
        const { url, username, password, title } = req.body;
        let objectData = {
            userId: verifiedToken.id,
            url,
            username,
            password,
            title
        };
        yield credentialService.createCredential(objectData);
        res.sendStatus(200);
    });
}
exports.createCredencial = createCredencial;
;
function getAllCredentials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { verifiedToken } = res.locals;
        const result = yield credentialService.getAllUserCredentials(verifiedToken.id);
        res.send(result).status(200);
    });
}
exports.getAllCredentials = getAllCredentials;
;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { verifiedToken } = res.locals;
        const { id } = req.params;
        const result = yield credentialService.getCredentialById(Number(id), verifiedToken.id);
        res.send(result).status(200);
    });
}
exports.getById = getById;
;
function deleteCredential(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { verifiedToken } = res.locals;
        const { id } = req.params;
        yield credentialService.deleteCredential(Number(id), verifiedToken.id);
        res.sendStatus(200);
    });
}
exports.deleteCredential = deleteCredential;
;
