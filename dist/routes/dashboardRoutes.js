"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardContreller_1 = require("../controllers/dashboardContreller");
const router = (0, express_1.Router)();
router.get("/", dashboardContreller_1.getDashboardMetrics);
exports.default = router;
