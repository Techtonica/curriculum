const model = require("../models/individuals");
//  Get all individual

const getAllIndividuals = async (req, res) => {
  try {
    const result = await model.getIndividual();
    res.send(result);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

const getIndividualsOfSpecies = async (req, res) => {
  try {
    const speciesId = req.params.id;
    const result = await model.getIndividualsOfSpecies(speciesId);
    res.send(result);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

module.exports = {
  getAllIndividuals,
  getIndividualsOfSpecies
};
