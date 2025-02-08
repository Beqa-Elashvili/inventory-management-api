"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userContreller_1 = require("../controllers/userContreller");
const router = (0, express_1.Router)();
router.get("/", userContreller_1.getUsers);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map