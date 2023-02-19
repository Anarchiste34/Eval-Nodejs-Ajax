const express = require('express');
const router = express.Router();
const feuController = require('../controller/feu_controller');

// ex: htpp://localhost:1997/feu/1
router.get("/feu/:id", feuController.getFeuById);
router.get("/feu", feuController.getFeu);
router.post("/feu", feuController.createFeu);
router.put("/feu/:id", feuController.updateFeu);
router.delete("/feu/:id", feuController.deleteFeuById);

module.exports = router