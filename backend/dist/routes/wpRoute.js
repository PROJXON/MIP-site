"use strict";
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
    router.get('/', async (req, res) => {
        try {
            const hasFilter = Object.keys(req.query || {}).length > 0;
            if (hasFilter) {
                const response = await api.get(path, { params: { ...req.query } });
                return res.status(200).json(response.data);
            }
            const allItems = [];
            let page = 1;
            let hasMoreItems = true;
            while (hasMoreItems) {
                const response = await api.get(path, {
                    params: {
                        page,
                        per_page: 10,
                    },
                });
                allItems.push(...response.data);
                const items = response.data;
                if (items.length < 10)
                    hasMoreItems = false;
                else
                    page++;
            }
            res.status(200).json(allItems);
        }
        catch (error) {
            res.status(error.response?.status || 500).json({
                message: 'Error fetching blogs',
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    });
    return router;
}
