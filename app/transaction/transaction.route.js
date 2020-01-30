const { Router } = require("express");
const router = Router();
const TransactionController = require("./transaction.controller");

const { submitTransaction } = TransactionController;

router.route("/submitTransaction").post(submitTransaction);

module.exports = router;
