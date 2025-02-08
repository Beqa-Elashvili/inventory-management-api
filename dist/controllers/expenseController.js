"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpensesByCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getExpensesByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expenseByCategorySummaryRaw = yield prisma.expenseByCategory.findMany({
            orderBy: {
                date: "desc",
            },
        });
        const expenseCategorySummary = expenseByCategorySummaryRaw.map((item) => (Object.assign(Object.assign({}, item), { amount: item.amount.toString() })));
        res.json(expenseCategorySummary);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving expenses by category" });
    }
});
exports.getExpensesByCategory = getExpensesByCategory;
//# sourceMappingURL=expenseController.js.map