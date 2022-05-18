
const express = require("express");
const router = express.Router();
const mainController = require("./controllers/main")

router.get("/", mainController.index);
router.post("/", mainController.login);
router.get("/bi", mainController.bi);
router.post("/sair", mainController.sair);

module.exports = router;