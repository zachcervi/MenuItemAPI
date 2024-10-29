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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRouter = void 0;
const express_1 = __importDefault(require("express"));
const ItemService = __importStar(require("./items.service"));
/**
 * Router Definition
 */
exports.itemsRouter = express_1.default.Router();
/**
 * Controller Definitions
 */
exports.itemsRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield ItemService.findAll();
        res.status(200).send(items);
    }
    catch (e) {
        next(e); // Use next to handle error properly
    }
}));
// GET items/:id
exports.itemsRouter.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const item = yield ItemService.find(id);
        if (item) {
            res.status(200).send(item);
        }
        else {
            res.status(404).send("Item not found");
        }
    }
    catch (e) {
        next(e);
    }
}));
// POST items
exports.itemsRouter.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = req.body;
        const newItem = yield ItemService.create(item);
        res.status(201).json(newItem);
    }
    catch (e) {
        next(e);
    }
}));
// PUT items/:id
exports.itemsRouter.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    try {
        const itemUpdate = req.body;
        const existingItem = yield ItemService.find(id);
        if (existingItem) {
            const updatedItem = yield ItemService.update(id, itemUpdate);
            res.status(200).json(updatedItem);
        }
        else {
            const newItem = yield ItemService.create(itemUpdate);
            res.status(201).json(newItem);
        }
    }
    catch (e) {
        next(e);
    }
}));
// DELETE items/:id
exports.itemsRouter.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        yield ItemService.remove(id);
        res.sendStatus(204);
    }
    catch (e) {
        next(e);
    }
}));
