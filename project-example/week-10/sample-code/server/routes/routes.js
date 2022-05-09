const express = require("express");
const { getAllSpecies } = require("../controller/speciesController");

const { getIndividualsOfSpecies } = require("../controller/individuals");

const {
  getAllSighting,
  addNewSighting,
  deleteSighting,
  getSightingDetails,
} = require("../controller/sightings");

const router = express.Router();

// SPECIES ROUTE
router.get("/api/species", getAllSpecies);

// INDIVIDUAL ROUTE
router.get("/api/individual/:id", getIndividualsOfSpecies);

// SIGHTING ROUTE
router.get("/api/sighting", getAllSighting);
router.get("/api/sighting/:id", getSightingDetails);
router.post("/api/sighting", addNewSighting);

router.delete("/api/sighting/:id", deleteSighting);

module.exports = router;
