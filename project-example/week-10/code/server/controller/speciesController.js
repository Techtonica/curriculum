const model = require("../models/species");

//  Get all species
const getAllSpecies = async (req, res) => {
  try {
    const species = await model.getAllSpecies();
    console.log(species);
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
};

module.exports = {
  getAllSpecies,
};
