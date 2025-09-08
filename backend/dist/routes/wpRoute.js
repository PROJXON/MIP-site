"use strict";
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
exports.default = wpRoute;
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
function wpRoute(baseURL, path) {
    const router = (0, express_1.Router)();
    const api = axios_1.default.create({
        baseURL: baseURL,
    });
    router.get('/', (_req, res) => __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const allItems = [];
            let page = 1;
            let hasMoreItems = true;
            while (hasMoreItems) {
                const response = yield api.get(path, {
                    params: {
                        page, // Specify the current page
                        per_page: 10, // Number of posts per page
                    },
                });
                allItems.push(...response.data); // Append posts to the result array
                // If the number of posts is less than the per_page limit, we've reached the end
                const items = response.data;
                if (items.length < 10)
                    hasMoreItems = false;
                else
                    page++; // Move to the next page
            }
            res.status(200).json(allItems);
        }
        catch (error) {
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                message: 'Error fetching blogs',
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }));
    return router;
}
