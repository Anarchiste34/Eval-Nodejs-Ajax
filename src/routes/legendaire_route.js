const express = require('express');
const router = express.Router();
const legendaireController = require('../controller/legendaire_controller');


// Ex: http://localhost:1997/légendaire/1
router.post("/legendaire", legendaireController.createLegendaire);
router.get("/legendaire", legendaireController.getLegendaire);
router.get("/legendaire/:id", legendaireController.getLegendaireById);
router.put("/legendaire/:id", legendaireController.updateLegendaire);
router.delete("/legendaire/:id", legendaireController.deleteLegendaireById);


module.exports = router
